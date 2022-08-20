import React, { useState, useEffect } from 'react';
import { FaSpinner, FaSquare } from 'react-icons/fa';

function Portfolio() {
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [repoItems, setRepoItems] = useState([]);
    const [error, setError] = useState(null);

    const url = "https://api.github.com/users/mnikirk/repos";

    useEffect(() => {
        fetch(url)
          .then( response => response.json() )
          .then( 
            (result) => {
                setIsLoaded(true);
                setRepoItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
      }, []);
    
      if (error) {
        return <p>Error: {error.message}</p>;
      } else if (!isLoaded) {
        return <p><FaSpinner className='portfolioIcon'/></p>;
      } else { 
        return (
        <div class="portfolio">
        <div className='portfolioCol1'>
        <p>Here are my latest public GitHub repositories:</p>
          <ul>
            {repoItems.map(item => (
              <li key={item.id}>
                <FaSquare className='portfolioIcon'/>
                <a className='portfolioLink' target="_blank" rel="noreferrer" href={item.html_url}>{item.name}</a>
              </li>
            ))}
          </ul>
          </div>
          <div className='portfolioCol2'>
            <p><strong>Featured Sites:</strong></p>
            <ul>
              <li>
                <FaSquare className='portfolioIcon'/>
                <a className='portfolioLink' target="_blank" rel="noreferrer" href="ronplecher.com">RonPlecher.com</a>  
                <p>Developed new landing pages and new HTML front-end for the IDX feed.</p>
              </li>
              <li>
                <FaSquare className='portfolioIcon'/>
                <a className='portfolioLink' target="_blank" rel="noreferrer" href="grantprops.com">Grant Properties</a>
                <p>Implemented their design with a customized CMS backend to add and edit rental listings.</p>
              </li>
              <li>
                <FaSquare className='portfolioIcon'/>
                <a className='portfolioLink' target="_blank" rel="noreferrer" href='#'>This site!</a><br />
                <p>Built in React. Featuring custom components, state, effect & api calls.</p>
              </li>
            </ul>
          </div>
          </div>
        );
      }
}

export default Portfolio;