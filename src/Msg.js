import React from 'react';
import styled from 'styled-components';

const MSG = styled.span`
	background-color: ${props =>props.bgColor? props.bgColor : '#dcf3d1'};
	width: 33.3%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
`
const CONTENT = styled.span`
	font-size: 40px;
   font-weight: bold;
`
const NAME = styled.span`
	border-bottom: 1px solid black;
	font-size: 13px;
	margin-top: 17px;
`
const Msg = (props)=>{
	return (
		<MSG bgColor={props.msg.bgColor}>
			<CONTENT>{props.msg.msg}</CONTENT>
			<NAME>{props.msg.name}</NAME>
		</MSG>
	)
}

export default Msg;