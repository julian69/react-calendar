import React from 'react';
import moment from 'moment';

const Header =  React.memo(() => {
  const dayShortName = moment.weekdaysShort().map(day => <th key={ day } className="calendar-header__day">{ day }</th>);

  return (
    <thead className="calendar-header bg-info text-white">
      <tr>{ dayShortName }</tr>
    </thead>
  );
});

export default Header;
