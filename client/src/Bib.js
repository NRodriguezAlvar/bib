import React, { Component } from 'react';
import BibRes from './assets/allBib.json';
import './Border.css';
import styled from 'styled-components';
import rest from './assets/bib.jpg';
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
/*
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("th")[n];
      y = rows[i + 1].getElementsByTagName("th")[n];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//Note: Act like a return.
export const Bib = () => (
        <Styles>
			<div>
				<h2 style = {{textAlign:"center"}}>Restaurants bib gourmand</h2>
				<p className="image"></p>
				<table id="mytable" style = {{marginLeft:"auto", marginRight:"auto"}}>
					<thead className='border' style = {{width: "400px", margin:"auto"}}>
						<tr>
							<th>Nom <button onClick="sortTable(0)"><FontAwesomeIcon icon={faCaretDown}/></button></th>
							<th>Cuisine <button onClick="sortTable(1)"><FontAwesomeIcon icon={faCaretDown}/></button></th>
							<th>Lieu <button onClick="sortTable(2)"><FontAwesomeIcon icon={faCaretDown}/></button></th>
						</tr>
					</thead>
					<tbody>
						{BibRes.map((Bib, Name) => {
							return <tr className='border' style = {{width: "400px", margin:"auto"}}>
										<th>{Bib.Name}</th>
										<th>{Bib.Cuisine}</th>
										<th>{Bib.Lieu}</th>
									</tr>})}
					</tbody>
				</table>
			</div>
		</Styles>
)*/

class Bib extends Component {
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
				<h2 style = {{textAlign:"center"}}>Restaurants bib gourmand</h2>
				<p className="image"></p>
				<table id="mytable" style = {{marginLeft:"auto", marginRight:"auto"}}>
					<thead className='border' style = {{width: "400px", margin:"auto"}}>
						<tr>
							<th>Nom <button onClick={this.handleClick}><FontAwesomeIcon icon={faCaretDown}/></button></th>
							<th>Cuisine <button onClick={this.handleClick}><FontAwesomeIcon icon={faCaretDown}/></button></th>
							<th>Lieu <button onClick={this.handleClick}><FontAwesomeIcon icon={faCaretDown}/></button></th>
						</tr>
					</thead>
					<tbody>
						{BibRes.map((Bib, Name) => {
							return <tr className='border' style = {{width: "400px", margin:"auto"}}>
										<th>{Bib.Name}</th>
										<th>{Bib.Cuisine}</th>
										<th>{Bib.Lieu}</th>
									</tr>})}
					</tbody>
				</table>
			</div>
		</Styles>
		)
	}
}

export default Bib;

