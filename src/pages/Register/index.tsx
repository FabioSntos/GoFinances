import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
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

	function handleTransactionTypeSelect(type: "up" | "down") {
		setTransactionType(type);
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
				</Fields>
				<Button title="enviar" />
			</Form>
		</Container>
	);
};
