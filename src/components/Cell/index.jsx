import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Reminder from '../Reminder';
import { getReminders } from '../../redux/selectors/reminders';
import { updateSelectedDate } from '../../redux/actions/dates';
import { updateRemindersModalStatus } from '../../redux/actions/reminders';
import { getDate, getMonth, getCurrentMonth, getYear, getcurrentDate } from '../../redux/selectors/dates';

const Cell = React.memo((props) => {
  const getCurrnetDateClass = () => {
    const isCurrentMonth = props.month === props.currentMonth;
    const isCurrentDate = props.dayInMonth.toString() === props.currentDate;
    return isCurrentDate && isCurrentMonth ? "bg-info rounded-circle text-white" : "";
  };

  const getFormattedDate = () => {
    const dateToObject = new Date(`${props.dayInMonth}/${props.month}/${props.year}`);
    return moment(dateToObject);
  };

  const onDateSelection = selectedDate => {
    props.updateRemindersModalStatus(true);
    props.updateSelectedDate(selectedDate);
  };

  return (
    <td
      role="button"
      className='calendar__date'
      onClick={ () => onDateSelection(getFormattedDate()) }>
        <div className="col">
          <div className="row">
            <div className={ `calendar__selected-date d-flex justify-content-center align-items-center ${getCurrnetDateClass()}` }>
              <span>{ props.dayInMonth }</span>
            </div>
          </div>
        </div>
        <div className="calendar__reminders-container col mt-1">
          <div className="row">
            {
              props.reminders[getFormattedDate()] &&
              _.map(
                _.sortBy(props.reminders[getFormattedDate()], 'time'),
                 reminder => <Reminder key={ reminder.id } content={ reminder } />
              )
            }
          </div>
        </div>
    </td>
  );
});

Cell.propTypes = {
  date: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  reminders: PropTypes.object.isRequired,
  dayInMonth: PropTypes.number.isRequired,
  currentDate: PropTypes.string.isRequired,
  currentMonth: PropTypes.string.isRequired,
  updateRemindersModalStatus: PropTypes.func.isRequired,
};

export default connect(state => ({
  date: getDate(state),
  year: getYear(state),
  month: getMonth(state),
  reminders: getReminders(state),
  currentDate: getcurrentDate(state),
  currentMonth: getCurrentMonth(state),
}),
{ updateRemindersModalStatus, updateSelectedDate })(Cell);