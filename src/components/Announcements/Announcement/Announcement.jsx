import React from 'react';
import styles from './Announcement.module.css';
import editImg from './../../../assets/images/edit.svg';
import trashImg from './../../../assets/images/trash.svg';
import {Link} from 'react-router-dom';

const Announcement = (props) => {
  const deleteAnnouncement = () => {
    props.deleteAnnouncement(props.id);
  };

  const link = '/announcement/' + props.id;
  return (
    <div className={styles.announcementContainer}>
      <div>
        <Link className={styles.announcement} to={link}>
          {props.title}
        </Link>
      </div>
      <div className={styles.imagesContainer}>
        <Link to={link}>
          <img
            src='https://img.icons8.com/ios/50/000000/edit.png'
            className={styles.editImg}
          />
        </Link>

        <img
          src='https://img.icons8.com/material-outlined/48/000000/trash.png'
          className={styles.trashImg}
          onClick={deleteAnnouncement}
        />
      </div>
    </div>
  );
};

export default Announcement;
