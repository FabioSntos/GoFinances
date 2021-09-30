import React, { useState } from "react";

import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import uuid from "react-native-uuid";

import { useNavigation } from "@react-navigation/native";

import { CategorySelect } from "../CategorySelect";

import {
	Container,
	Header,
	Title,
	Form,
	Fields,
	TransactionsTypes,
} from "./styles";

interface FormData {
	name: string;
	amount: string;
}

const schema = Yup.object()
	.shape({
		name: Yup.string().required("Nome é obrigatório"),
		amount: Yup.number()
			.typeError("Informe um valor numérico")
			.required("Valor é obrigatório")
			.positive("O valor não pode ser nagativo"),
	})
	.defined();

export const Register = () => {
	const dataKey = "@gofinances:transactions";

	const [transactionType, setTransactionType] = useState("positive");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	const navigation = useNavigation();

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	function handleTransactionTypeSelect(type: "positive" | "negative") {
		setTransactionType(type);
	}

	function handleSelectCategoryModal() {
		setCategoryModalOpen(!categoryModalOpen);
	}

	async function handleSubmitTransaction(form: FormData) {
		if (!transactionType || category.key === "category") {
			return Alert.alert("Preencha todos os campos");
		}

		const newTransaction = {
			id: String(uuid.v4()),
			name: form.name,
			amount: form.amount,
			type: transactionType,
			category: category.key,
			date: new Date(),
		};
		try {
			const data = await AsyncStorage.getItem(dataKey);
			const currentData = data ? JSON.parse(data) : [];

			const dataFormatted = [...currentData, newTransaction];

			await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
			console.log(dataFormatted);

			reset();
			setTransactionType("");
			setCategory({
				key: "category",
				name: "Categoria",
			});

			//@ts-expect-error
			navigation.navigate("Listagem");
		} catch (error) {
			console.log(error);
			Alert.alert("Não foi possível salvar as informações");
		}
	}
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Header>
					<Title>Cadastro</Title>
				</Header>
				<Form>
					<Fields>
						<InputForm
							control={control}
							name="name"
							placeholder="Nome"
							autoCapitalize="sentences"
							autoCorrect={false}
							error={errors.name && errors.name.message}
						/>
						<InputForm
							control={control}
							name="amount"
							placeholder="Preço"
							keyboardType="numeric"
							error={errors.amount && errors.name.message}
						/>
						<TransactionsTypes>
							<TransactionTypeButton
								type="up"
								title="Entrada"
								onPress={() => handleTransactionTypeSelect("positive")}
								isActive={transactionType === "positive"}
							/>
							<TransactionTypeButton
								type="down"
								title="Saída"
								onPress={() => handleTransactionTypeSelect("negative")}
								isActive={transactionType === "negative"}
							/>
						</TransactionsTypes>
						<CategorySelectButton
							title={category.name}
							onPress={handleSelectCategoryModal}
						/>
					</Fields>
					<Button
						title="enviar"
						onPress={handleSubmit(handleSubmitTransaction)}
					/>
				</Form>

				<Modal visible={categoryModalOpen}>
					<CategorySelect
						category={category}
						setCategory={setCategory}
						closeSelectCategory={handleSelectCategoryModal}
					/>
				</Modal>
			</Container>
		</TouchableWithoutFeedback>
	);
};
