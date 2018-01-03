import React, {Component} from 'react';
import styled from 'styled-components';

const MSG = styled.span`
	background-color: ${props =>props.bgColor? props.bgColor : '#dcf3d1'};
	width: 33.33%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	cursor: pointer;
	position: relative;
`
const CONTENT = styled.span`
	font-size: ${props => props.fontSize};
   font-weight: bold;
	width: 100%;
	text-align: center;
`
const NAME = styled.span`
	border-bottom: 1px solid black;
	font-size: 13px;
	margin-top: 17px;
`

const EXPEND = styled.span`
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: ${props=>props.show? 'flex':'none'};
	z-index: 1;
	background-color: ${props=>props.bgColor};
	font-size:40px;
	padding: 20px;
	box-sizing: border-box;
	cursor: pointer;
`
class Msg extends Component {
	expand = ()=>{
		const oldState = this.state.expand;
		const updateState = !oldState;
		this.setState({expand: updateState});
	}
	state = {
		expand: false
	}

	render(){
		let max_length = 7;
		let show_content = this.props.msg.msg;
		let fontSize = '40px';

		if(this.props.msg.msg.length >=max_length){
			show_content = this.props.msg.msg.slice(0, max_length) + '...';
		}
		return (
			<MSG bgColor={this.props.msg.bgColor} onClick={this.expand}>
				<CONTENT fontSize={fontSize}>{show_content}</CONTENT>
				<NAME>{this.props.msg.name}</NAME>
				<EXPEND bgColor={this.props.msg.bgColor} show={this.state.expand}>
					<CONTENT fontSize={fontSize}>{this.props.msg.msg}</CONTENT>
					<NAME>{this.props.msg.name}</NAME>
				</EXPEND>
			</MSG>
		)
	}


}


export default Msg;