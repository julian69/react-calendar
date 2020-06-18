import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Cell from '../Cell';
import { getDaysInMonth, getYear, getMonth, getFirstDayOfMonth } from '../../redux/selectors/dates';

const Body = (props) => {
  const getEmptyCells = () => {
    const emptyCells = [];

    for (let i = 0; i < props.firstDayOfMonth; i++) {
      emptyCells.push(<td key={ `empty-cell-${i}-${props.month}-${props.year}` } className="calendar-body__day calendar-body--empty bg-light" />);
    };

    return emptyCells;
  };

  const getDaysInMonth = () => {
    const daysInMonth = [];

    for (let i = 1; i <= props.daysInMonth; i++) {
      daysInMonth.push(<Cell key={ `cell-${i}-${props.month}-${props.year}` } dayInMonth={ i }/>);
    };

    return daysInMonth;
  };

  const renderDays = () => {
    let cells = [];
    const rows = [];
    const allCells = [
      ...getEmptyCells(),
      ...getDaysInMonth()
    ];

    allCells.forEach((row, index) => {
      if (index % 7 !== 0) cells.push(row);
      else {
        !_.isEmpty(cells) && rows.push(cells);
        cells = [];
        cells.push(row);
      }

      if (index === allCells.length - 1) rows.push(cells);
    });

    return rows.map((item, index) => <tr key={ `row-${index}-${props.month}-${props.year}` }>{ item }</tr>)
  }

  return <tbody>{ renderDays() }</tbody>;
};

Body.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  firstDayOfMonth: PropTypes.string.isRequired,
};

export default connect(state => ({
  year: getYear(state),
  month: getMonth(state),
  daysInMonth: getDaysInMonth(state),
  firstDayOfMonth: getFirstDayOfMonth(state),
}))(Body);
