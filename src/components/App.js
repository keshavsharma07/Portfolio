import React, {Component} from 'react';


import './App.css';
import {Layout,Header,Navigation,Drawer,Content}  from 'react-mdl';
import { Portfolio } from './Portfolio/Portfolio';


class App extends Component{
        constructor(){
            super();
            this.state={
                selectedSection:""
            };
        }

    handleSectionClick = (sectionName) => {
     alert(sectionName); 
    } 


  render(){
  
  return (

                
<div className="App">
<Portfolio 
handleSectionClick={this.handleSectionClick}/>
</div>

  );
}
}
export default App;
