import _ from 'lodash';

import ACTION_TYPE from '../action-types';
import { handleActions } from 'redux-actions';

export const INIT_STATE = {
  reminders: {},
  activeReminder: null,
  isRemindersModalOpen: false,
};

const handleSaveReminder = (state, { payload: { reminder } }) => ({
  ...state,
  reminders: {
    ...state.reminders,
    [reminder.selectedDate]: {
      ...state.reminders[reminder.selectedDate],
      [reminder.id]: {
        ...reminder
      },
    },
  }
});

const handleDeleteReminder = (state, { payload: { reminder } }) => {
  const remindersClone = _.cloneDeep(state.reminders);

  delete remindersClone[reminder.selectedDate][reminder.id];

  _.isEmpty(remindersClone[reminder.selectedDate])
    ? delete remindersClone[reminder.selectedDate]
    : _.set(remindersClone, reminder.selectedDate, reminder);

  return ({
    ...state,
    reminders: {
      ...remindersClone,
    }
  });
};

const handleRemindersModalStatus = (state, { payload: { isRemindersModalOpen } }) => ({
  ...state,
  isRemindersModalOpen
});

const handleUpdateActiveReminder = (state, { payload: { reminderSelectedDate, reminderId } }) => ({
  ...state,
  activeReminder: reminderSelectedDate && reminderId ? state.reminders[reminderSelectedDate][reminderId] : null
});

export default handleActions({
  [ACTION_TYPE.SAVE_REMINDER]: handleSaveReminder,
  [ACTION_TYPE.DELETE_REMINDER]: handleDeleteReminder,
  [ACTION_TYPE.UPDATE_ACTIVE_REMINDER]: handleUpdateActiveReminder,
  [ACTION_TYPE.UPDATE_REMINDERS_MODAL_STATUS]: handleRemindersModalStatus,
}, INIT_STATE);