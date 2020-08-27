import React, {useEffect, useState} from 'react';
import styles from './AnnouncementPage.module.css';
import editImg from './../../assets/images/edit.svg';
import {reduxForm, Field} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';
import {
  maxLength5000,
  requiredField,
  maxLength100,
} from '../../utils/validators/validators';
import {connect} from 'react-redux';

import {
  updateAnnouncement,
  getSimiliar,
} from './../../redux/announcement-reducer';

const EditAnnouncementForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.announcementWrapper}>
      <div>
        <Field
          type='text'
          placeholder='Title'
          name='title'
          component={Input}
          validate={[requiredField, maxLength100]}
          className={styles.titleField}
        />
      </div>
      <div>
        <Field
          type='textarea'
          placeholder='Description'
          name='description'
          component={Textarea}
          validate={[requiredField, maxLength5000]}
          className={styles.descriptionField}
        />
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button className={styles.updateButton}>Update</button>
      </div>
    </form>
  );
};

const ReduxEditAnnouncementForm = reduxForm({
  form: 'editAnnouncement',
})(EditAnnouncementForm);

const ConnectedForm = connect(
  (state) => ({
    initialValues: {
      title: state.announcementsPage.selectedAnnouncement[0].title,
      description: state.announcementsPage.selectedAnnouncement[0].description,
      id: state.announcementsPage.selectedAnnouncement[0].id,
    },
    enableReinitialize: true,
  }),
  null
)(ReduxEditAnnouncementForm);

const AnnouncementPage = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);
    props.updateAnnouncement(formData.id, formData.description, formData.title);
    props.getAnnouncementById(props.match.params.id);
    setEditMode(false);
  };

  useEffect(() => {
    props.getAnnouncementById(props.match.params.id);
    props.getSimiliar();
  }, [props.match.params.id]);

  if (editMode) return <ConnectedForm onSubmit={onSubmit} />;

  return props.selectedAnnouncement[0] ? (
    <div className={styles.announcementWrapper}>
      <div className={styles.announcementTitle}>
        {props.selectedAnnouncement[0].title}
      </div>
      <div className={styles.announcementDescription}>
        {props.selectedAnnouncement[0].description}
      </div>
      <div className={styles.announcementDate}>
        {new Date(props.selectedAnnouncement[0].dateAdded).toLocaleString()}
        <img
          src='https://img.icons8.com/ios/50/000000/edit.png'
          alt=''
          className={styles.editImg}
          onClick={() => setEditMode(true)}
        />
      </div>

      <div className={styles.similiar}>Similiar Announcements</div>
    </div>
  ) : (
    ''
  );
};

const mapStateToProps = (state) => ({
  similiar: state.announcementsPage.similiar,
});
export default connect(mapStateToProps, {updateAnnouncement, getSimiliar})(
  AnnouncementPage
);
