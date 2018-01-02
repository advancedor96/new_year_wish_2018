import React, { Component } from 'react';
import styled from 'styled-components';
import resolution_example from './images/resolutions_example.png';

const HEADER = styled.header`
	height: 340px;
	background-color: #F9E98C;
	display: flex;
`;
const LEFT = styled.div`
	width: 200px;
	/* border: 1px solid; */
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const RIGHT = styled.div`
	width: 100%;
	/* border: 1px solid red; */
	background-image: url( ${props => props.bgimg} );
	background-size: cover;

`;

const NewWisthButton = styled.span`
	display: inline-table;
	border-bottom: 1px solid black;
	font-weight: bolder;
	margin-top: 60px;
	cursor: pointer;
	padding: 3px;
`

const Transbox = styled.div`
	height: 100%;
	background-color: rgba(249,233,140, 0.9);
	display: flex;
	flex-direction: column;
	align-items: center;
`
class Intro extends Component {

	render() {
		console.log('resolution_example:',resolution_example);
		return (
			<HEADER>
				<LEFT>
					<p style={{ marginTop: '40px', padding:'3px' }}>來這裡許願吧！</p>
					<NewWisthButton onClick={this.props.add}> 新增你的願望 </NewWisthButton>
				</LEFT>
				<RIGHT bgimg={resolution_example}>
					<Transbox>
						<div style={{ fontSize: '50px', marginTop:'10px', padding: '10px'}}>2018年</div>
						<div style={{ fontSize: '50px', marginTop:'40px', padding: '10px'}}>新年新希望</div>
					</Transbox>
				</RIGHT>
				{/* <button>首頁</button>
				<button onClick={this.props.add}>新增</button> */}
			</HEADER>
		);
	}
}

export default Intro;