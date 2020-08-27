import React from 'react';
import './App.css';
import {Route, withRouter, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import AnnouncementsContainer from './components/Announcements/AnnouncementsContainer';
import AddAnnouncement from './components/AddAnnouncement/AddAnnouncement';
import AnnouncementPageContainer from './components/AnnouncementPage/AnnouncementPageContainer';
function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-content'>
        <Header />
        <Route exact path='/' component={AnnouncementsContainer} />
        <Route path='/add' render={() => <AddAnnouncement />} />
        <Route path='/announcement/:id' component={AnnouncementPageContainer} />
      </div>
    </div>
  );
}

export default App;
