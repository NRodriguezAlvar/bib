import React from 'react'
import BibRes from './assets/allBib.json';
import './Border.css';

//Note: Act like a return.
export const Bib = () => (
        <div>
            <h2 style = {{textAlign:"center"}}>Restaurants bib gourmand</h2>
            {BibRes.map((Bib, Name) => {
                return <div className='border' style = {{width: "400px", margin:"auto"}}>
                            <p style={{textAlign:"center"}}>Nom : {Bib.Name}<br/>Cuisine : {Bib.Cuisine}<br/>Lieu : {Bib.Lieu}</p>
                        </div>})}
        </div>
)
