import React from 'react';
import styles from './Announcements.module.css';
import Announcement from './Announcement/Announcement';

const Announcements = (props) => {
  const items = props.searchValue
    ? props.searchAnnouncenents
    : props.announcements;

  const annoncementElements = items.map((data) => (
    <Announcement
      title={data.title}
      key={data.id}
      id={data.id}
      deleteAnnouncement={props.deleteAnnouncement}
    />
  ));

  const onChangeSearch = (e) => {
    props.setSearchValue(e.currentTarget.value);
  };

  return (
    <div className={styles.annoncementsContainer}>
      <input
        type='text'
        placeholder='Search'
        value={props.searchValue}
        onChange={onChangeSearch}
        className={styles.searchInput}
      />
      {annoncementElements}
    </div>
  );
};

export default Announcements;
