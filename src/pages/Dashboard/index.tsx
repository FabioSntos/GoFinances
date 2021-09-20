import React from "react";

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
		</Container>
	);
};
