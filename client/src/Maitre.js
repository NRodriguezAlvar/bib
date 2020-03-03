import React, { Component } from 'react';
import MaitreRes from './assets/allMaitre.json';
import './Border.css';
import styled from 'styled-components';
import rest from './assets/maitre.jpg';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Styles = styled.div`
	.image{
        background-image: url(${rest});
		background-size: cover;
		height:295px;
		width: 560px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		overflow-y: hidden; // hide vertical
		overflow-x: hidden; 
    }
`;



class Maitre extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(n){
		alert("Le tri n'a pas abouti");
	}
	render() {
		return (
			<Styles>
			<div>
				<h2 style = {{textAlign:"center"}}>Restaurants maître restaurateur</h2>
				<p className="image"></p>
				<table id="mytable" style = {{marginLeft:"auto", marginRight:"auto"}}>
					<thead className='border' style = {{width: "400px", margin:"auto"}}>
						<tr>
							<th>Nom <button onClick={this.handleClick}><FontAwesomeIcon icon={faCaretDown}/></button></th>
						</tr>
					</thead>
					<tbody>
						{MaitreRes.map((Maitre, Name) => {
							return <tr className='border' style = {{width: "400px", margin:"auto"}}>
										<th>{Maitre.Name.replace(/ *\([^)]*\) */g, "")}</th>
									</tr>})}
					</tbody>
				</table>
			</div>
		</Styles>
		)
	}
}

export default Maitre;