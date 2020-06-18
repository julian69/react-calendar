import _ from 'lodash';
import { createSelector } from 'reselect';

export const getDatesState = state => _.result(state, 'dates');
export const getYear = createSelector(getDatesState, datesState => _.result(datesState, 'year'));
export const getDate = createSelector(getDatesState, datesState => _.result(datesState, 'date'));
export const getMonth = createSelector(getDatesState, datesState => _.result(datesState, 'month'));
export const getDaysInMonth = createSelector(getDatesState, datesState => _.result(datesState, 'daysInMonth'));
export const getcurrentDate = createSelector(getDatesState, datesState => _.result(datesState, 'currentDate'));
export const getCurrentMonth = createSelector(getDatesState, datesState => _.result(datesState, 'currentMonth'));
export const getSelectedDate = createSelector(getDatesState, datesState => _.result(datesState, 'selectedDate'));
export const getFirstDayOfMonth = createSelector(getDatesState, datesState => _.result(datesState, 'firstDayOfMonth'));

