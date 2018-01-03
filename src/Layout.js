import React, { Component } from 'react';
import Intro from './Intro';
import AddMessage from './AddMessage';
import Messages from './Messages';
import axios from 'axios';

import styled from 'styled-components';
const LAYOUT = styled.div`
	/* height: 100vh; */
	position: relative;
	display: flex;
	flex-flow: column;
	min-width: 370px;
	max-width: 1140px;
	margin: auto;
`
class Layout extends Component {
	state = {
		add: true,
		msg_list: []
	}
	componentDidMount(){
		this.getData();
	}
	addHandler = ()=>{
		this.setState({ add : true})
	}
	closeHandler = ()=>{
		this.setState({ add : false})

	}
	getData = ()=>{
		//從 firebase 抓留言
		axios.get('https://newyearwish-8b1c7.firebaseio.com/messages.json')
			.then(res=>{
				if(res.status === 200){
					this.setState({msg_list: Object.values(res.data)});
				}
			})
			.catch(err=>{
				console.log('[layout]:',err);
			})
	}

	render() {
		return (
			<LAYOUT>
				<Intro add={this.addHandler} />
				<AddMessage 
					show={this.state.add} 
					close={this.closeHandler} 
					refreshData={this.getData}/>

				<Messages msg_list={this.state.msg_list} />
			</LAYOUT>
		);
	}
}

export default Layout;