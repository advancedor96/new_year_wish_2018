import React, { Component } from 'react';
import styled from 'styled-components';

const BlackLayer = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
	position: absolute;
	top: 0;
	bottom :0;
	left: 0;
	right :0;
`
class Backdrop extends Component {

	render() {
		let backdrop = null;
		if (this.props.show) {
			backdrop = <BlackLayer onClick={this.props.closeAdd}>
				</BlackLayer>;
		}

		return backdrop;
	}
}

export default Backdrop;