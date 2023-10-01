import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'เหตุการณ์ที่ 1',
    start: new Date(2023, 9, 1),
    end: new Date(2023, 9, 2),
  },
  {
    title: 'เหตุการณ์ที่ 2',
    start: new Date(2023, 9, 5),
    end: new Date(2023, 9, 7),
  },
  // เพิ่มเหตุการณ์เพิ่มเติมที่นี่
];

const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
