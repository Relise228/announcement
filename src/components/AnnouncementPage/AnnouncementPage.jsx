import React, {useEffect} from 'react';

const AnnouncementPage = (props) => {
  debugger;
  useEffect(() => {
    props.getAnnouncementById(props.match.params.id);
  }, [props.match.params.id]);
  return <div></div>;
};

export default AnnouncementPage;
