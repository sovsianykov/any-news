import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import MyAppNavbar from "./components/MyAppNavbar";


const App = () =>
    <Router>
        <MyAppNavbar />
    </Router>
export default App;
