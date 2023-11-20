import React from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = (): any => {
  const onDateChange = (date, type) => {
    console.log(date);
  };

  const minDate = new Date();
  const maxDate = new Date(2027, 6, 3);

  return (
    <View>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor="#f2e6ff"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange}
      />
    </View>
  );
};

export default Calendar;
