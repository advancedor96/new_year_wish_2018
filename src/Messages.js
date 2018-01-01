import React, { Component } from 'react';
import styled from 'styled-components';
import Msg from './Msg';
import _ from 'lodash';
const MESSAGES = styled.div`
	height: calc( 100vh - 30px );
	overflow: auto;
`
class Messages extends Component {


	render() {
		let messages = null;
		if( !_.isEmpty( this.props.msg_list)){
			messages = this.props.msg_list.map( (el, idx)=>{
				return <Msg msg={el} key={idx} />
			})
		}


		return (
			<MESSAGES>
				{messages}
			</MESSAGES>
		);
	}
}

export default Messages;