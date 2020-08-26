import React from 'react';
import styles from './Announcements.module.css';
import Announcement from './Announcement/Announcement';

const Announcements = (props) => {
  const annoncementElements = props.announcements.map((data) => (
    <Announcement
      title={data.title}
      key={data.id}
      id={data.id}
      deleteAnnouncement={props.deleteAnnouncement}
    />
  ));

  return (
    <div className={styles.annoncementsContainer}>{annoncementElements}</div>
  );
};

export default Announcements;
