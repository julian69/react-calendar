import _ from 'lodash';
import React from 'react';

export const generateIdsForListItem = item => ({ id: _.uniqueId(), value: item });

export  const generateTimesByHalfHourInterval = () => {
  const halfs = ["00", "30"];
  const times = [];

  for(let i = 0; i < 24; i++){
    for(let j = 0; j < 2; j++){
      const time = i + ":" + halfs[j];
      times.push(<option key={ time } value={ time }>{ time }</option>);
    }
  }

  return times;
};