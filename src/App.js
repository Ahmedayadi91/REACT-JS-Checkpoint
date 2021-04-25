import React from 'react'
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {Add1} from './componant/Add1'
import { AddUser } from './componant/AddUser'
import { EditUser } from './componant/EditUser'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Salem from'./componant/salem'
import Welcome from'./componant/welcome'
import Event from './componant/Event'


function App() {
  return (
    <div className="App">
      <div >
      <div className="Head" > <Add1  ></Add1> <AddUser> </AddUser>
      <EditUser></EditUser> </div> </div>  
      <AddUser> </AddUser>
      <EditUser></EditUser>
      <Salem name='Slim '  place='Torento'> 
      <p style={{color: "red"}}> bonjour slim comment vas tu?
        </p></Salem>
      <Salem name='Ali ' place='Paris'> 
     
      </Salem> 
      <div className="Ah1" ><Salem name='Hamdi' place='Tokyo'/> </div>
      <Welcome name='hbib '> </Welcome> 
      <Welcome name='Anis '> </Welcome>
      <Button color="primary">Primary</Button>{' '}
      <Button color="secondary">Secondary</Button>{' '}
      <Button color="danger">Danger!</Button>
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" width='100px ' height='100px'
      alt="new"
      />
       <Event/>
       {/* <a href="#" onclick="console.log('Le lien a été cliqué.'); return false">
  Clique ici
</a> */}
    </div>
  );
}

export default App;
