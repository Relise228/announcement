import React, {useState} from 'react';
import styles from './AddAnnpuncement.module.css';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../../common/FormsControls/FormsControls';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {reset} from 'redux-form';
import {
  requiredField,
  maxLength50,
  maxLength2000,
} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {addAnnouncement} from '../../redux/announcement-reducer';
import {Redirect} from 'react-router-dom';

const AddAnnouncementForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <div>
        <Field
          type='text'
          placeholder='Title'
          name='title'
          component={Input}
          validate={[requiredField, maxLength50]}
          className={styles.title}
        />
      </div>
      <div>
        <Field
          type='textarea'
          placeholder='Description'
          name='description'
          component={Textarea}
          validate={[requiredField, maxLength2000]}
          className={styles.description}
        />
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button className={styles.addButton}>Add</button>
      </div>
    </form>
  );
};

const ReduxAddAnnouncementForm = reduxForm({
  form: 'addAnnouncement',
})(AddAnnouncementForm);

const AddAnnouncement = (props) => {
  const [submited, setSubmited] = useState(false);
  const onSubmit = (formData) => {
    console.log(formData);
    props.addAnnouncement(formData.title, formData.description);
    setSubmited(true);
  };

  if (submited) return <Redirect to='/' />;

  return (
    <div className={styles.addWrapper}>
      <h1>Add Announcement</h1>
      <ReduxAddAnnouncementForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(null, {addAnnouncement})(AddAnnouncement);
