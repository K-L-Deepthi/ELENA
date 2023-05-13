import './PossibleRoutes.css';
import React, { useContext } from 'react';
import { DataContext } from './Context';

function PossibleRoutes() {

    const { source, destination } = useContext(DataContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
            <div className="app-name">EleNA</div>
        </div>
      </header>
      <div className="container">
         <div className="left2">


         </div>
         <div className="right2">
            <div className="location-data">
                <div>
                    <a>Source</a>
                </div>
                <div className = "data-container">
                   <a>{source}</a>
                </div>
                <div>
                     <a>Destination</a>
                </div>
                <div className = "data-container">
                     <a>{destination}</a>
                </div>
            </div>

            <div className = "transport">
                <button className="submit-button-2">
                     <img src="https://w7.pngwing.com/pngs/305/951/png-transparent-computer-icons-nordic-walking-sport-people-icon-miscellaneous-angle-hand.png" alt="Walk" className="logo" />
                </button>
                <button className="submit-button-2">
                     <img src="https://w7.pngwing.com/pngs/941/1003/png-transparent-triathlon-cycling-computer-icons-sport-cycling-thumbnail.png" alt="Cycle" className="logo" />
                </button>
                <button className="submit-button-2">
                    <img src="https://w7.pngwing.com/pngs/208/784/png-transparent-car-drawing-car-outline-compact-car-car-cartoon-thumbnail.png" alt="Car" className="logo" />
                </button>

            </div>
         </div>
      </div>
    </div>
  );
}

export default PossibleRoutes;
