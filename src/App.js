// This file is the major, "wrapper" component.

// Importing necessary packages and components
import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY ='49037379791178e87b7d2059ddbbfba6';

// Initializing a component
class App extends React.Component {
  // Initializing a state
  state = { // State is an object that lives within a component. It's responsible for keeping track of changing data within a component.
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault(); // prevents the default behavior of this component when we press the button
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`); // Use template strings to inject variables that you have defined within your files
    const data = await api_call.json();
    console.log(data);
    // this.state.temperature =   Never do this! Never directly manipulate a state!

    if(city && country) { // If city and country have been indicated
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });      
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the value.'
      }); 
    }

  }
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-5 title-container'>
                  <Titles />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature} 
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};





// Export the component
export default App;