import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


export default class DateInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
        this.props.handleDate(date);
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment()}
            className="border-shadow"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="DD/MM/YYYY      -      LT"
            timeCaption="Time"
        />;
    }
}