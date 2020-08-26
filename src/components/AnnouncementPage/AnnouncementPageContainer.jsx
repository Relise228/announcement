import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AnnouncementPage from './AnnouncementPage';
import {getAnnouncementById} from './../../redux/announcement-reducer';

const mapStateToProps = (state) => {
  return {
    selectedAnnouncement: state.announcementsPage.selectedAnnouncement,
  };
};

export default compose(
  connect(mapStateToProps, {getAnnouncementById}),
  withRouter
)(AnnouncementPage);
