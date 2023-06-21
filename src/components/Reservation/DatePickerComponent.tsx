import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { IInputStateType } from './ReservationType';
import { format } from 'date-fns';

function DatePickerComponent({
  inputState,
  setInputState,
}: {
  inputState: IInputStateType;
  setInputState: React.Dispatch<React.SetStateAction<IInputStateType>>;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, 'yyyy/MM/dd') : '';
    setSelectedDate(date);
    const newInputState = {
      ...inputState,
      ymd: formattedDate,
    };
    newInputState.reservationDate = [
      newInputState.ymd,
      ' ',
      newInputState.hour,
      ' 시 ',
      newInputState.minute,
      ' 분',
    ].join('');
    setInputState(newInputState);
  };

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
