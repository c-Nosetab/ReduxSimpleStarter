import React from 'react';
import ReactDOM from 'react-dom';
// create a new component. This component should produce some HTML

const App = () => {
  return <div>Hi!</div>;
}


// Take the components and put it on the page

ReactDOM.render(<App />, document.querySelector('div.container'));



