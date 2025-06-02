import { useState, useEffect } from 'react';
import './Episodes.css';



function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    //fetches episode list from .json file
    useEffect (() => {
        fetch('/DWEpisodes.json')
        .then(response => response.json())
        .then(data => setEpisodes(data))
        .catch(err => console.error('Failed to load Episodes:', err));
    
    }, []);
    //displays list of episodes in scrollable table
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
                                ) : ("Something went Timey-Wimey...")
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