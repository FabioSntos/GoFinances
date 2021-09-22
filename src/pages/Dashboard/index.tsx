import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

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
} from "./styles";

export const Dashboard = () => {
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
				<TransactionCard />
			</Transactions>
		</Container>
	);
};
