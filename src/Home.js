import './Home.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './Context';

//export const DataContext = createContext();

export const Home = ({ children }) => {

      const navigate = useNavigate();

      const { source, setSource, destination, setDestination, percentage, setPercentage } = useContext(DataContext);


      const handleSubmit = () => {
        if (source === '' || destination === '' || percentage === '') {
          alert('Please fill in all input fields.');
        } else {
          navigate('/possibleroutes');
          console.log('Source:', source);
          console.log('Destination:', destination);
          console.log('Percentage:', percentage);

          setSource('');
          setDestination('');
          setPercentage('');
        }

      };


  return (
    <div className="Home">
      <header className="App-header">
        <div className="header">
            <div className="app-name">EleNA</div>
        </div>
      </header>
      <div className="container">
         <div className="left">
            <div className="container1">
                <div className="title">
                    <a>Elevation-based</a>
                    <br />
                    <a>Navigation System</a>
                </div>
                <div className="description">
                    <p>Navigating system that can show possible routes that are shortest and also consider elevation gain.</p>
                </div>
            </div>

         </div>
         <div className="right">
            <div className="input-form">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter value of x%"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                    <button className="submit-button" onClick={handleSubmit}>
                        Search possible routes
                    </button>
                </div>
         </div>
      </div>
    </div>
  );
}

export default Home;
