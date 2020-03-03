import React from 'react';
import styled from 'styled-components';
import rest from './assets/restaurant.jpg';

const Styles = styled.div`
	body {
		overflow-y: hidden; /* Hide vertical scrollbar */
		overflow-x: hidden; /* Hide horizontal scrollbar */
	}
	div{
		background-image: url(${rest});
		height: 100vh;
		width: 100vw;
		overflow-y: hidden;
		overflow-x: hidden; 
    }
`;


export const Menu = () => (
	<Styles>
		<div className="image">
			<h1 style={{color:"white", textAlign:"center"}}>Bienvenue sur notre site !</h1>
			<h2 style={{color:"white", textAlign:"center"}}>Ici, vous trouverez tous les restaurants bib gourmand, maitres restaurateurs et les restaurants ayant les deux distinctions !</h2>
		</div>
	</Styles>
)