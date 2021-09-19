import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.title};
	font-size: 24px;
	font-weight: bold;
`;
