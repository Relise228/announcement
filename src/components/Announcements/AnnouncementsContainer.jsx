import React from 'react';

import {connect} from 'react-redux';
import Announcements from './Announcements';
import {
  deleteAnnouncement,
  setSearchValue,
} from './../../redux/announcement-reducer';

const mapStateToProps = (state) => {
  return {
    announcements: state.announcementsPage.announcements,
    searchAnnouncenents: state.announcementsPage.searchAnnouncenents,
    searchValue: state.announcementsPage.searchValue,
  };
};

const AnnouncementsContainer = connect(mapStateToProps, {
  deleteAnnouncement,
  setSearchValue,
})(Announcements);

export default AnnouncementsContainer;
