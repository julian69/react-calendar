import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { getActiveReminder } from '../../redux/selectors/reminders';
import { generateTimesByHalfHourInterval } from '../../utils/helpers';
import { updateRemindersModalStatus } from '../../redux/actions/reminders';

const RemindersModalForm = (props) => (
  <Form>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        value={ props.reminderTitle }
        placeholder="Title..."
        onChange={ event => props.setReminderTitle(event.target.value) }
        className={ _.isEmpty(props.reminderTitle) || !props.isTitleOk ? 'border-danger' : '' } />
        { !props.isTitleOk && <span className="text-danger">Max 30 characters</span> }
    </FormGroup>
    {
      props.reminderDate && <FormGroup>
        <Label for="title">New date</Label>
        <Input
          id="date"
          type="date"
          name="date"
          value={ moment(props.reminderDate).format('YYYY-MM-DD') }
          onChange={ event => props.setReminderDate(moment(event.target.value)) }/>
      </FormGroup>
    }
    <FormGroup>
      <Label for="time">Time</Label>
      <Input
        id="time"
        name="time"
        type="select"
        placeholder="Time..."
        value={ props.reminderTime }
        onChange={ event => props.setReminderTime(event.target.value) }
        className={ _.isEmpty(props.reminderTime) ? 'border-danger' : '' }>
          <option>Select time...</option>
          { generateTimesByHalfHourInterval() }
        </Input>
    </FormGroup>
    <FormGroup>
      <Label for="time">Color</Label>
      <Input
        id="color"
        name="color"
        type="select"
        placeholder="color..."
        value={ props.reminderColor }
        onChange={ event => props.setReminderColor(event.target.value) }>
          <option>Select color...</option>
          <option value="success">Green</option>
          <option value="danger">Red</option>
          <option value="warning">Yellow</option>
          <option value="info">Blue</option>
        </Input>
    </FormGroup>
  </Form>
);

RemindersModalForm.propTypes = {
  activeReminder: PropTypes.object,
  isTitleOk: PropTypes.bool.isRequired,
  setReminderDate: PropTypes.func.isRequired,
  setReminderTime: PropTypes.func.isRequired,
  setReminderTitle: PropTypes.func.isRequired,
  setReminderColor: PropTypes.func.isRequired,
  updateRemindersModalStatus: PropTypes.func.isRequired,
};

RemindersModalForm.defaultProps = {
  activeReminder: {},
};

export default connect(state => ({
  activeReminder: getActiveReminder(state),
}),
{ updateRemindersModalStatus })(RemindersModalForm);
