import React from 'react';

import {connect} from 'react-redux';
import Announcements from './Announcements';
import {deleteAnnouncement} from './../../redux/announcement-reducer';

const mapStateToProps = (state) => {
  return {
    announcements: state.announcementsPage.announcements,
  };
};

const AnnouncementsContainer = connect(mapStateToProps, {deleteAnnouncement})(
  Announcements
);

export default AnnouncementsContainer;
