import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Modal } from "react-native";

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

export const Register = () => {
	const [transactionType, setTransactionType] = useState("up");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	const { control, handleSubmit } = useForm();

	function handleTransactionTypeSelect(type: "up" | "down") {
		setTransactionType(type);
	}

	function handleSelectCategoryModal() {
		setCategoryModalOpen(!categoryModalOpen);
	}
	function handleSubmitTransaction(form: FormData) {
		const data = {
			name: form.name,
			amount: form.amount,
			transactionType,
			category: category.key,
		};
		console.log(data);
	}

	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<Form>
				<Fields>
					<InputForm control={control} name="name" placeholder="Nome" />
					<InputForm control={control} name="amount" placeholder="Preço" />
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
	);
};
