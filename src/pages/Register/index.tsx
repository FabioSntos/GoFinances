import React, { useState } from "react";

import { Modal } from "react-native";

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Input } from "../../components/Forms/Input";
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

export const Register = () => {
	const [transactionType, setTransactionType] = useState("up");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	function handleTransactionTypeSelect(type: "up" | "down") {
		setTransactionType(type);
	}

	function handleSelectCategoryModal() {
		setCategoryModalOpen(!categoryModalOpen);
	}

	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<Form>
				<Fields>
					<Input placeholder="Nome" />
					<Input placeholder="Preço" />
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
				<Button title="enviar" />
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
