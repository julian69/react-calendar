import moment from 'moment';

import ACTION_TYPE from '../action-types';
import { handleActions } from 'redux-actions';

export const INIT_STATE = {
  date: moment(),
  selectedDate: null,
  currentDate: moment().format("D"),
  currentMonth: moment().format("MMMM"),
  get year() { return this.date.format("YYYY") },
  get month() { return this.date.format("MMMM") },
  get daysInMonth() { return this.date.daysInMonth() },
  get firstDayOfMonth() { return this.date.startOf("month").format("d") },
};

const handleUpdateDate = (state, { payload: { date } }) => ({
  ...state,
  date,
  currentDate: state.currentDate,
  year: state.date.format("YYYY"),
  currentMonth: state.currentMonth,
  month: state.date.format("MMMM"),
  daysInMonth: state.date.daysInMonth(),
  firstDayOfMonth: state.date.startOf("month").format("d"),
});

const handleUpdateSelectedDate = (state, { payload: { selectedDate } }) => ({
  ...state,
  selectedDate
});

export default handleActions({
  [ACTION_TYPE.UPDATE_DATE]: handleUpdateDate,
  [ACTION_TYPE.UPDATE_SELECTED_DATE]: handleUpdateSelectedDate
}, INIT_STATE);