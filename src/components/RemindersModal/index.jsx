import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import RemindersModalForm from '../RemindersModalForm';
import { getSelectedDate } from '../../redux/selectors/dates';
import { updateSelectedDate } from '../../redux/actions/dates';
import { getRemindersModalStatus, getActiveReminder } from '../../redux/selectors/reminders';
import { updateRemindersModalStatus, saveReminder, deleteReminder, updateActiveReminder } from '../../redux/actions/reminders';

const RemindersModal = (props) => {
  const [reminderId, setReminderId] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [reminderColor, setReminderColor] = useState('');
  const [reminderTitle, setReminderTitle] = useState('');

  const isTitleOk = _.size(reminderTitle) <= 30;

  useEffect(() => {
    if (!props.isRemindersModalOpen) {
      setReminderId('');
      setReminderDate('');
      setReminderTime('');
      setReminderColor('');
      setReminderTitle('');
    }

    if (props.activeReminder) {
      setReminderId(props.activeReminder.id);
      setReminderTime(props.activeReminder.time);
      setReminderColor(props.activeReminder.color);
      setReminderTitle(props.activeReminder.title);
      setReminderDate(props.activeReminder.selectedDate);
    }
  }, [props.isRemindersModalOpen, props.activeReminder]);

  const toggleModal = () => {
    props.updateActiveReminder();
    props.updateSelectedDate(null);
    props.updateRemindersModalStatus(!props.isRemindersModalOpen);
  };

  const setReminder = () => {
    const reminderData = {
      time: reminderTime,
      title: reminderTitle,
      color: reminderColor,
      id: reminderId || _.uniqueId('reminder_'),
      selectedDate: reminderDate || props.selectedDate,
    };

    reminderDate && props.deleteReminder(props.activeReminder);
    props.saveReminder(reminderData);
    toggleModal();
  };

  return (
    <Modal
      className={ props.className }
      isOpen={ props.isRemindersModalOpen }>
      <ModalHeader>Reminder</ModalHeader>
      <ModalBody>
        <RemindersModalForm
          isTitleOk={ isTitleOk }
          reminderDate={ reminderDate }
          reminderTime={ reminderTime }
          reminderColor={ reminderColor }
          reminderTitle={ reminderTitle }
          setReminderDate={ setReminderDate }
          setReminderTime={ setReminderTime }
          setReminderTitle={ setReminderTitle }
          setReminderColor={ setReminderColor } />
      </ModalBody>
      <ModalFooter>
        <Button
          size="sm"
          color="danger"
          onClick={ toggleModal }>
          Cancel
        </Button>
        <Button
          size="sm"
          color="success"
          onClick={ setReminder }
          disabled={ _.isEmpty(reminderTitle) || _.isEmpty(reminderTime) || !isTitleOk }>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

RemindersModal.propTypes = {
  activeReminder: PropTypes.object,
  saveReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  updateSelectedDate: PropTypes.func.isRequired,
  updateActiveReminder: PropTypes.func.isRequired,
  isRemindersModalOpen: PropTypes.bool.isRequired,
  updateRemindersModalStatus: PropTypes.func.isRequired,
};

RemindersModal.defaultProps = {
  activeReminder: {},
};

export default connect(state => ({
  selectedDate: getSelectedDate(state),
  activeReminder: getActiveReminder(state),
  isRemindersModalOpen: getRemindersModalStatus(state),
}),
{ updateRemindersModalStatus, saveReminder, deleteReminder, updateActiveReminder, updateSelectedDate })(RemindersModal);
