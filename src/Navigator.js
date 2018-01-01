import React, { Component } from 'react';
import styled from 'styled-components';

const HEADER = styled.header`
	height: 30px;
	background-color: grey;
`;
class Navigator extends Component {



	render() {
		return (
			<HEADER>
				<button>首頁</button>
				<button onClick={this.props.add}>新增</button>
			</HEADER>
		);
	}
}

export default Navigator;