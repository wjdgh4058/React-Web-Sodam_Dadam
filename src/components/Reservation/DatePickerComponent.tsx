import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  console.log(selectedDate);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        locale={ko}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜를 선택하세요"
        className="w-48 h-12 pl-4 border border-gray-700 rounded"
      />
    </div>
  );
}

export default DatePickerComponent;
