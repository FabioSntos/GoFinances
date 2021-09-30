import { useState, useEffect, useCallback } from "react";
import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
	TransactionCard,
	TransactionCardProps,
} from "../../components/TransactionCard";

import {
	Container,
	Header,
	UserContainer,
	UserInfo,
	Photo,
	User,
	UserGreeting,
	UserName,
	PowerButton,
	HighlightCards,
	Transactions,
	Title,
	TransactionList,
	LogoutButton,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export const Dashboard = () => {
	const [data, setData] = useState<DataListProps[]>([]);

	async function loadTransactions() {
		const dataKey = "@gofinances:transactions";
		const responseTransaction = await AsyncStorage.getItem(dataKey);

		const transactions = responseTransaction
			? JSON.parse(responseTransaction)
			: [];

		const transactionsFormatted: DataListProps[] = transactions.map(
			(item: DataListProps) => {
				const amount = Number(item.amount).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				});

				const date = Intl.DateTimeFormat("pt-BR", {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
				}).format(new Date(item.date));

				return {
					id: item.id,
					name: item.name,
					amount,
					type: item.type,
					category: item.category,
					date,
				};
			}
		);
		setData(transactionsFormatted);
	}
	useEffect(() => {
		loadTransactions();
	}, []);

	useFocusEffect(
		useCallback(() => {
			loadTransactions();
		}, [])
	);

	return (
		<Container>
			<Header>
				<UserContainer>
					<UserInfo>
						<Photo
							source={{
								uri: "https://avatars.githubusercontent.com/u/57735438?v=4",
							}}
						/>
						<User>
							<UserGreeting>Olá,</UserGreeting>
							<UserName>Fábio</UserName>
						</User>
					</UserInfo>
				</UserContainer>
				<LogoutButton onPress={() => {}}>
					<PowerButton name="power" />
				</LogoutButton>
			</Header>
			<HighlightCards>
				<HighlightCard
					type="up"
					title="Entradas"
					amount="R$ 17.400,00"
					lastTransaction="Última entrada dia 13 de abril"
				/>
				<HighlightCard
					type="down"
					title="Saídas"
					amount="R$ 1.259,00"
					lastTransaction="Última saída dia 03 de abril"
				/>
				<HighlightCard
					type="total"
					title="Entradas"
					amount="R$ 16.141,00"
					lastTransaction="01 à 16 de abril"
				/>
			</HighlightCards>

			<Transactions>
				<Title>Listagem</Title>
				<TransactionList
					data={data}
					keyExtractor={item => item.id}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
};
