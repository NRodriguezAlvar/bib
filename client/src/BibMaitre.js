import React from 'react'
import BibMaitreRes from './assets/allBibMaitre';
import './Border.css';

//Note: Act like a return.
export const BibMaitre = () => (
        <div>
            <h2 style = {{textAlign:"center"}}>Restaurants bib gourmand et maître restaurateur</h2>
            {BibMaitreRes.map((BibMaitre, Name) => {
                return <div className='border' style = {{width: "400px", margin:"auto"}}>
                            <p style={{textAlign:"center"}}>Nom : {BibMaitre.Name}<br/>Lieu : {BibMaitre.Lieu}</p>
                        </div>})}
        </div>
)
