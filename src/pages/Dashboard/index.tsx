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
} from "./styles";

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export const Dashboard = () => {
	const data: DataListProps[] = [
		{
			id: "1",
			type: "positive",
			title: "Salário Mensal",
			amount: "R$ 3.450,00",
			category: { name: "emprego", icon: "dollar-sign" },
			date: "13/04/2021",
		},
		{
			id: "2",
			type: "negative",

			title: "hamburguer artesanal",
			amount: "R$ 65, 97",
			category: { name: "Alimentação", icon: "coffee" },
			date: "22/09/2021",
		},
		{
			id: "3",
			type: "negative",

			title: "Aluguel do apartamento",
			amount: "R$ 1.350,00",
			category: { name: "casa", icon: "shopping-bag" },
			date: "13/04/2021",
		},
	];

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
				<PowerButton name="power" />
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
