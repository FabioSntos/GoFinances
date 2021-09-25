import React, { useState } from "react";

import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

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

const schema = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório"),
	amount: Yup.number()
		.typeError("Informe um valor numérico")
		.required("Valor é obrigatório")
		.positive("O valor não pode ser nagativo"),
});

export const Register = () => {
	const [transactionType, setTransactionType] = useState("up");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	function handleTransactionTypeSelect(type: "up" | "down") {
		setTransactionType(type);
	}

	function handleSelectCategoryModal() {
		setCategoryModalOpen(!categoryModalOpen);
	}
	function handleSubmitTransaction(form: FormData) {
		if (
			!transactionType ||
			category.key === "category" ||
			form.amount ||
			form.name
		)
			return Alert.alert("Preencha todos os campos");

		const data = {
			name: form.name,
			amount: form.amount,
			transactionType,
			category: category.key,
		};
		console.log(data);
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
							//@ts-expect-error
							control={control}
							name="name"
							placeholder="Nome"
							autoCapitalize="sentences"
							autoCorrect={false}
							//@ts-expect-error

							error={errors.name && errors.name.message}
						/>
						<InputForm
							//@ts-expect-error
							control={control}
							name="amount"
							placeholder="Preço"
							keyboardType="numeric"
							//@ts-expect-error
							error={errors.amount && errors.name.message}
						/>
						<TransactionsTypes>
							<TransactionTypeButton
								type="up"
								title="Entrada"
								onPress={() => handleTransactionTypeSelect("up")}
								isActive={transactionType === "up"}
							/>
							<TransactionTypeButton
								type="down"
								title="Saída"
								onPress={() => handleTransactionTypeSelect("down")}
								isActive={transactionType === "down"}
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
