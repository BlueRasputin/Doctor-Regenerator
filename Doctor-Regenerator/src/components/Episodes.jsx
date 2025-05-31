import React, { useState, useEffect } from 'react';
import '../Episodes.css';
// import '../public/DWEpisodes.json';

//I need to fetch data from the Episode list
//I want to be able to filter that data by Doctor Number (stretch goal)
//Need Use Effect to display a 


//Need to Loop through episode data 

function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect (() => {
        fetch('/DWEpisodes.json')
        .then(response => response.json())
        .then(data => setEpisodes(data))
        .catch(err => console.error('Failed to load Episodes:', err));
    
    }, []);

    return (
        
            <div className="episode-table-box">
                {episodes ? (
                    <table className="episode-table">
                        <thead>
                            <tr>
                                <th>DOCTOR</th>
                                <th>TITLE</th>
                                <th>EPISODE</th>
                                <th>FIRST AIRED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(episodes) && episodes.map((episode, index) => (
                                episode ? (
                                    <tr key={index}>
                                    <td>{episode.doctorid}</td>
                                    <td>{episode.title}</td>
                                    <td>{episode.episodeid}</td>
                                    <td>{episode.first_diffusion}</td>
                                    
                                </tr>
                                ) : ("Something went Wibbly-Wobbly...")
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Wibbly Wobbly... Fetching data</p>
                
                )}
            </div> 
            
    )
}


export default Episodes;