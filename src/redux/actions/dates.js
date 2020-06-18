import ACTION_TYPE from '../action-types';

export const updateDate = date => ({
    type: ACTION_TYPE.UPDATE_DATE,
    payload: {
        date,
    },
});

export const updateSelectedDate = selectedDate => ({
    type: ACTION_TYPE.UPDATE_SELECTED_DATE,
    payload: {
        selectedDate,
    },
});