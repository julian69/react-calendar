import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Body from '../Body';
import Header from '../Header';
import MonthYearNav from '../MonthYearNav';
import RemindersModal from '../RemindersModal';
import { getRemindersModalStatus } from '../../redux/selectors/reminders';
import './Calendar.scss';

const Calendar =(props) => (
  <section className="calendar">
    <MonthYearNav />
    <Table bordered>
      <Header />
      <Body />
    </Table>
    { props.isRemindersModalOpen && <RemindersModal /> }
  </section>
);

Calendar.propTypes = {
  isRemindersModalOpen: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isRemindersModalOpen: getRemindersModalStatus(state),
}))(Calendar);


