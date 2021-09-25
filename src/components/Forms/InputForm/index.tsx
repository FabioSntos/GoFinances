import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styles";

interface InputFormProps extends TextInputProps {
	control: Control;
	name: string;
}

export const InputForm = ({ control, name, ...rest }: InputFormProps) => {
	return (
		<Container>
			<Controller
				control={control}
				render={({ field: { onChange, value } }) => (
					<Input onChangeText={onChange} value={value} {...rest} />
				)}
				name={name}></Controller>
		</Container>
	);
};
