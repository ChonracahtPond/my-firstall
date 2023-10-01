import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Link from 'next/link';

interface Mark {
  id: number;
  date: string;
  time: string;
  name: string;
  location: string;
  cusname: string;
  tel: string;
  nameAE: string;
  messages: string;
}

const convertMarksToEvents = (marks: Mark[]) => {
  return marks.map((mark) => {
    return {
      title: mark.name,
      start: new Date(mark.date),
      end: new Date(mark.date),
    };
  });
};

function MyCalendar() {
  const [markData, setMarkData] = useState<Mark[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={markData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event: any) => {
          // แสดงข้อความแจ้งเตือนเมื่อคลิกที่เหตุการณ์
          window.alert('เหตุการณ์ถูกคลิก: ' + event.title);
        }}
        onSelectSlot={(slotInfo: any) => {
          // แสดงข้อความแจ้งเตือนเมื่อเลือกช่วงเวลา
          window.alert('ช่วงเวลาถูกเลือก: ' + slotInfo.start);
        }}
      />
    </div>
  );
}

export default MyCalendar;
