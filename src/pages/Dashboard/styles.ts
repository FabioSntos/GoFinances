import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFPercentage(42)}px;

	background: ${({ theme }) => theme.colors.primary};
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
export const UserContainer = styled.View`
	width: 80%;
	justify-content: space-between;
`;
export const UserInfo = styled.View`
	flex-direction: row;
	align-items: center;
`;
export const Photo = styled.Image`
	width: ${RFValue(48)}px;
	height: ${RFValue(48)}px;

	border-radius: 10px;
`;
export const User = styled.View`
	margin-left: 18px;
`;
export const UserGreeting = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PowerButton = styled(Feather)`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: ${RFValue(30)}px;
`;
