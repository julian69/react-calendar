import _ from 'lodash';
import { createSelector } from 'reselect';

export const getRemindersState = state => _.result(state, 'reminders');
export const getReminders = createSelector(getRemindersState, remindersState => _.result(remindersState, 'reminders'));
export const getActiveReminder = createSelector(getRemindersState, remindersState => _.result(remindersState, 'activeReminder'));
export const getRemindersModalStatus = createSelector(getRemindersState, remindersState => _.result(remindersState, 'isRemindersModalOpen'));
