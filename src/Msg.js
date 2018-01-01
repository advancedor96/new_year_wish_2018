import React from 'react';
import styled from 'styled-components';

const MSG = styled.div`
	background-color: ${props =>props.bgColor? props.bgColor : '#dcf3d1'};
	width: 200px;
`
const Msg = (props)=>{
	return (
		<MSG bgColor={props.msg.bgColor}>
			<p>name: {props.msg.name}</p>
			<p>msg: {props.msg.msg}</p>
		</MSG>
	)
}

export default Msg;