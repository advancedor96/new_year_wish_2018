import React, {Component} from 'react';
import styled from 'styled-components';

const MSG = styled.span`
	background-color: ${props =>props.bgColor? props.bgColor : '#dcf3d1'};
	width: 33.3%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	cursor: pointer;
`
const CONTENT = styled.span`
	font-size: 40px;
   font-weight: bold;
	width: 100%;
	text-overflow: ellipsis;
	white-space: ${props=>props.expand? 'normal': 'nowrap'};
`
const NAME = styled.span`
	border-bottom: 1px solid black;
	font-size: 13px;
	margin-top: 17px;
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
		let max_length = 5;
		let show_content = this.props.msg.msg;
		if(this.state.expand){
			return (
				<MSG bgColor={this.props.msg.bgColor} onClick={this.expand}>
				<CONTENT expand>{show_content}</CONTENT>
				<NAME>{this.props.msg.name}</NAME>
			</MSG>
			)
		}
		if(this.props.msg.msg.length >=max_length){
			show_content = this.props.msg.msg.slice(0, max_length) + '...';

		}
		return (
			<MSG bgColor={this.props.msg.bgColor} onClick={this.expand}>
				<CONTENT>{show_content}</CONTENT>
				<NAME>{this.props.msg.name}</NAME>
			</MSG>
		)
	}


}


export default Msg;