import React from 'react'
import MaitreRes from './assets/allMaitre.json';
import './Border.css';

//Note: Act like a return.
export const Maitre = () => (
        <div>
            <h2 style = {{textAlign:"center"}}>Restaurants maître restaurateur</h2>
            {MaitreRes.map((Maitre, Name) => {
                return <div className='border' style = {{width: "400px", margin:"auto"}}>
                            <p style={{textAlign:"center"}}> Nom: {Maitre.Name.replace(/ *\([^)]*\) */g, "")}</p>
                        </div>})}
        </div>
)