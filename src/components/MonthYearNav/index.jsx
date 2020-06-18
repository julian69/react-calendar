import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import { updateDate } from '../../redux/actions/dates';
import { getDate, getMonth, getYear } from '../../redux/selectors/dates';

const MonthYearNav = (props) => (
  <section className="calendar-month-year-nav d-flex justify-content-between align-items-center bg-danger text-white text-uppercase py-3">
    <button
      className="calendar--btn-transparent text-white"
      onClick={ () => props.updateDate(props.date.subtract(1, "month")) }>
        <IoIosArrowDropleft size="30" />
    </button>
    <h2 className="mb-0">
      <span className="font-weight-light">{ props.month }</span> <strong>{ props.year }</strong>
    </h2>
    <button
      className="calendar--btn-transparent text-white"
      onClick={ () => props.updateDate(props.date.add(1, "month")) }>
        <IoIosArrowDropright size="30" />
      </button>
  </section>
);

MonthYearNav.propTypes = {
  date: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  updateDate: PropTypes.func.isRequired,
};

export default connect(state => ({
  date: getDate(state),
  year: getYear(state),
  month: getMonth(state),
}),
{ updateDate })(MonthYearNav);
