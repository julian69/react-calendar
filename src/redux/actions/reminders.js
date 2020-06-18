import ACTION_TYPE from '../action-types';

export const saveReminder = reminder => ({
  type: ACTION_TYPE.SAVE_REMINDER,
  payload: {
    reminder,
  },
});

export const deleteReminder = reminder => ({
  type: ACTION_TYPE.DELETE_REMINDER,
  payload: {
    reminder,
  },
});

export const updateRemindersModalStatus = isRemindersModalOpen => ({
  type: ACTION_TYPE.UPDATE_REMINDERS_MODAL_STATUS,
  payload: {
    isRemindersModalOpen,
  },
});

export const updateActiveReminder = (reminderSelectedDate, reminderId) => ({
  type: ACTION_TYPE.UPDATE_ACTIVE_REMINDER,
  payload: {
    reminderSelectedDate,
    reminderId,
  },
});