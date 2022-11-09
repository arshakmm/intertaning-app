import React from 'react';
import './App.css';
import Navabr from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Courses from './components/Courses/Courses';
import Tasks from './components/Tasks/Tasks';
import Population from './components/Population/Population';


const App =()  =>{
  return ( <div className='app-wrapper'>
    <BrowserRouter>
    <div className='app-wrapper-nav'> <Navabr/> </div>
     
      <div  className='app-wrapper-box'>
      <Routes>
        <Route path='/courses' element ={<Courses/>} />
        <Route path='/tasks' element ={<Tasks/>} />
        <Route path='/population' element ={<Population/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
