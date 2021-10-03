import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import FirstContainer from './Components/FirstContainer';
import WhyMatter from './Components/WhyMatter';
import ThinkingLabs from './Components/ThinkingLabs';
import Trainings from './Components/Trainings';
import MeetUps from './Components/MeetUps';
import Webinars from './Components/Webinars';
import Conference from './Components/Conference';
import Videos from './Components/Videos';
import Podcast from './Components/PodCast';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <FirstContainer/>
     <WhyMatter/>
     <ThinkingLabs/>
     <Trainings/>
     <MeetUps/>
     <Webinars/>
     <Conference/>
     <Videos/>
     <Podcast/>
    </div>
  );
}

export default App;
