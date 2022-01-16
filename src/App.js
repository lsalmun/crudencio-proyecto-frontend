

import React from 'react'
import { BrowserRouter as Router,  Route,  Switch} from "react-router-dom";
import CreateProducts from './components/CreateProducts';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm.js';
import Home from './components/Home.js';
import CategoryForm from './components/CategoryForm';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Popper, Dropdown } from 'react-bootstrap';
import Cebolla from './components/Onion.js';
import Pue from './components/Puerro.js';
import Tom from './components/Tomate.js';
import Piz from './components/Pizza.js';
import Bru from './components/Bruschetta';



function App() {
  return (
 
 <>
<div id = "pantalla">
  
  <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
        
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Ingresar</a>
        </li>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Productos
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/Productos.onion">Onion</Dropdown.Item>
    <Dropdown.Item href="/Productos.puerro">Puerro</Dropdown.Item>
    <Dropdown.Item href="/Productos.tomate">Tomate</Dropdown.Item>
    <Dropdown.Item href="/Productos.pizza">Pizza</Dropdown.Item>
    <Dropdown.Item href="/Productos.bruschetta">Bruschetta</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


      </ul>
    </div>
  </div>
</nav>

</div>


    <Router >
      <Switch>

      <Route path = "/Productos.bruschetta">
          
          <Bru/>
          </Route>

      <Route path = "/Productos.onion">
          
          <Cebolla/>
          </Route>

          <Route path = "/Productos.pizza">
          
          <Piz/>
          </Route>

          <Route path = "/Productos.puerro">
          
          <Pue/>
          </Route>

          <Route path = "/Productos.tomate">
          
          <Tom/>
          </Route>
      

        <Route path = "/register">
          
    <RegisterForm/>
    </Route>

    <Route path = "/chat">
          
    <Chat/>
    </Route>

    <Route path = "/login">
          
    <LoginForm/>

    </Route>

    

<Route path = "/productsCreat">
<CreateProducts/>
</Route>

<Route path = "/home">
          
          <Home/>
      
          </Route>

          <Route path = "/categorycreate">
          
          <CategoryForm/>
      
          </Route>

          <div>

            
          </div>
      





    
    </Switch>
    </Router>

    </div>

    </>

    
  );
}

export default App;
