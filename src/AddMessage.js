import React, { Component } from 'react';
import styled from 'styled-components';
import Aux from './Aux';
import Backdrop from './Backdrop';
import axios from 'axios';

const MessageWindow = styled.div`
	/* border: 1px solid red; */

	z-index: 2;
	height: 70%;
	width: 70%;
	position: fixed;
	transition: all 0.3s ease-out;
	left: 14%;
	top: 20%;

	background: ${props => props.bgColor};
	box-sizing: border-box;

`
const NameField = styled.input`
    background-color: transparent;
    border: none;
    border-image: initial;
    padding: 10px;
`

const TEXTAREA = styled.textarea`
	padding: 10px;
	background-color: transparent;
	border: 0.5 solid gray;
`
class AddMessage extends Component {
	state={
		bgColor: ''
	}
	componentWillMount(){
		console.log('componentWill Mount');
		this.setState({bgColor: this.getRandomColor()})
	}
	componentWillUpdate(){
		console.log('componentWillU pdate');
		// this.setState({bgColor: this.getRandomColor()})

	}
	changeColorHandler = ()=>{
		let oldColor = this.state.bgColor;
		let newColor  = this.getRandomColor();
		while(newColor === oldColor){
			newColor = this.getRandomColor();
		}
		this.setState({bgColor: newColor});
	}
	
	getRandomColor =()=>{
		let colors = [ '#ffe3d0','#fff1b5','#dcf3d1','#d4f2f4','#fff5de', '#d4dff4'];
		let idx = Math.floor( Math.random()* colors.length );
		return colors[idx];
	 }

	submitHandler = ()=>{
		//送到 firebase
		const msgObj = {
			name: this.nameInput.value,
			msg: this.msgInput.value,
			bgColor: this.state.bgColor
		}
		// console.log('this.nameInput',this.nameInput.value);
		console.log('msgObj',msgObj);

		axios.post('https://newyearwish-8b1c7.firebaseio.com/messages.json', msgObj)
			.then(res=>{
				if(res.status === 200){
					this.setState({name: '', msg: '', bgColor: ''}, ()=>{

					this.props.close();
					this.props.refreshData();
					});
				}
			})
			.catch(err=>{
				console.log('err',err);
				this.props.close();
			})


	}
	render() {
		console.log('add render');
		return (
			<Aux>
				<Backdrop 
					show={this.props.show} 
					closeAdd={this.props.close}/>

				<MessageWindow style={{
					transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
					opacity: this.props.show? '1' : '0',
				}} bgColor={this.state.bgColor}>
					<button onClick={this.changeColorHandler}>換顏色</button>
					<NameField type='text' 
						// onChange={this.nameChange} 
						placeholder="姓名"
						innerRef={ comp=> this.nameInput = comp}
					/>
					<br />

					<TEXTAREA cols="50" rows="20" 
						style={{width: '80%'}}
						//  onChange={this.msgChange} 
						 placeholder="留言"
						 innerRef={comp =>this.msgInput = comp}
					/>
					<br />

					<button onClick={this.submitHandler}>送出</button>
				</MessageWindow>
			</Aux>
		)


	}
}

export default AddMessage;