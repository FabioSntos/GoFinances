import React from "react";
import { Input } from "../../components/Forms/Input";
import { Container, Header, Title, Form } from "./styles";

export const Register = () => {
	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>
			<Form>
				<Input placeholder="Nome" />
				<Input placeholder="Nome" />
			</Form>
		</Container>
	);
};
