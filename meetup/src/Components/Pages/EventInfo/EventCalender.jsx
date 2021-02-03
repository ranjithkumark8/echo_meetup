

import React from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';

const EventCalender = () => {
    const [value , setValue] = React.useState(moment('2021-02-4'))
    const [selectedValue , setselectedValue] = React.useState(moment('2021-02-4'))
    
    const onSelect = value => {
        setValue(value)
        setselectedValue(value)
      };
    
      const onPanelChange = value => {
        this.setState(value);
      };
    return (
        <div>
            <Alert
                message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
                />
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange}  /> 
        </div>
    )
}

export {EventCalender}
