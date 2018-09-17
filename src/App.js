import React, { Component } from 'react';
import styled from 'styled-components';
import emojiData from './emojiData.json';

class App extends Component {
	render() {
		console.log(emojiData);
		return (
			<AppContainer className="App">
				<h1>Emoji Finder</h1>
				<input placeholder="Search for your Emoji" />
				<div>
					{emojiData.slice(0, 20).map(emoji => {
						return (
							<div>
								<div>
									{emoji.title}
									{emoji.symbol}
								</div>
							</div>
						);
					})}
				</div>
				{/* To do: put data results here */}
			</AppContainer>
		);
	}
}

const AppContainer = styled.div`
	text-align: center;
	}
`;

export default App;
