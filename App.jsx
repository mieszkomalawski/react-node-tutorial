import React from 'react';

class App extends React.Component {
   render() {

   var i = 1;

   var myStyle = {
      fontSize: 100,
      color: '#FF0000'
   };

      return (
         <div>
            <h1 style = {myStyle}>Hello</h1>
            <h1>Javscript example {1 == 1 ? 'True' : 'False'}</h1>
            <p data-myattribute="value">Elo</p>
            {//Some comment}
         </div>
      );
   }
}

export default App;