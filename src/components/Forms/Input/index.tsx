import React from "react";

import { TextInputProps } from "react-native";

import { Container } from "./styles";

type InputProps = TextInputProps;

export const Input = ({ ...rest }: InputProps) => {
	return <Container {...rest} />;
};
