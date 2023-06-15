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
        locale={ko} // 한글 locale 설정
        dateFormat="yyyy/MM/dd" // 날짜 형식 설정
        // isClearable
        placeholderText="날짜를 선택하세요"
        className="w-48 h-12 pl-4 border border-gray-700 rounded"
      />
    </div>
  );
}

export default DatePickerComponent;
