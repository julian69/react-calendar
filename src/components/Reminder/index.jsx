import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSelectedDate } from '../../redux/selectors/dates';
import { updateSelectedDate } from '../../redux/actions/dates';
import { updateRemindersModalStatus, updateActiveReminder, deleteReminder } from '../../redux/actions/reminders';
import './Reminder.scss';

const Reminder = (props) => {
  const reminderOnClick = () => {
    props.updateRemindersModalStatus(true);
    props.updateSelectedDate(props.content.selectedDate)
    props.updateActiveReminder(props.content.selectedDate, props.content.id);
  };

  const onDeleteReminder = (event) => {
    props.deleteReminder(props.content);
    event.stopPropagation();
  };

  return (
    <Alert
      onClick={ reminderOnClick }
      data-reminder-id={ props.content.id }
      color={ props.content.color || 'secondary' }
      toggle={ (event) => onDeleteReminder(event) }
      className="calendar-reminder col-12 py-0 px-1 mb-1">
      <strong className="calendar-reminder__title d-inline-block text-truncate align-middle pr-1">
        <small>{ props.content.title }</small>
      </strong>
      <span>/</span>
      <small className="pl-1">{ props.content.time }</small>
    </Alert>
  );
};

Reminder.propTypes = {
  selectedDate: PropTypes.object,
  updateSelectedDate: PropTypes.func.isRequired,
  updateActiveReminder: PropTypes.func.isRequired,
  updateRemindersModalStatus: PropTypes.func.isRequired,
};

Reminder.defaultProps = {
  selectedDate: {},
};

export default connect(state => ({
  selectedDate: getSelectedDate(state),
}),
{ updateRemindersModalStatus, updateActiveReminder, deleteReminder, updateSelectedDate })(Reminder);
