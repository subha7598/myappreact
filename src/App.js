import React from 'react';
import './App.css';
import Mainpage from './Mainpage';
 class App extends React.Component{
     render()
     {
         return(
             <div className="App">
                 <div className="container">
             <Mainpage/>
             </div>
             </div>
         )
     }
 }
 export default App