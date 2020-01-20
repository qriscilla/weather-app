// This file is the major, "wrapper" component.

// Importing necessary packages and components
import React from 'react';
import Titles from './components/Titles';

// Initializing a component
class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
      </div>
    );
  }
};

// Export the component
export default App;