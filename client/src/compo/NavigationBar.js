import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Form';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
		background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;
        &:hover{
            color: white;
        }
    }
	.nav-link {
		float: left;
		font-size: 16px;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		marginBottom: 20px;
	}
`;



export const NavigationBar = () =>(
	<Styles>
		<div>
			<Navbar bg="light" expand="lg" style={{height:"50px"}}>
				<Nav id="navbar" className="ml-auto">
					<Nav.Link href="/" >Home</Nav.Link>
					<Nav.Link href="/bib" >Bib</Nav.Link>
					<Nav.Link href="/maitre" >Maitre</Nav.Link>
					<Nav.Link href="/bibmaitre">Bib and Maitre</Nav.Link>
				</Nav>
		</Navbar>
		</div>
	</Styles>
)


export default NavigationBar;