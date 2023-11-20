import React from 'react';
import {View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Colors } from '../theme/colors';

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
        todayBackgroundColor={Colors.lighBlue}
        selectedDayColor={Colors.lighBlue}
        selectedDayTextColor={Colors.white}
        onDateChange={onDateChange}
      />
    </View>
  );
};

export default Calendar;
