import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// ต้องแปลงข้อมูล Mark เป็นรูปแบบของเหตุการณ์ที่ใช้ในปฏิทิน
const convertMarksToEvents = (marks: any[]) => {
  return marks.map((mark: { name: any; date: string | number | Date; }) => {
    return {
      title: mark.name,
      start: new Date(mark.date), // แปลงข้อมูลวันที่ให้เป็น Date object
      end: new Date(mark.date),   // ในกรณีที่ต้องการแสดงเหตุการณ์เป็นวันเดียว
    };
  });
};

function MyCalendar() {
  const [markData, setMarkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let eventsData; // ประกาศตัวแปร eventsData ด้านนอกขอบเขตของ fetch

    fetch('/api/mark/')
      .then((response) => response.json())
      .then((data) => {
        eventsData = convertMarksToEvents(data.mark);
        setMarkData(eventsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const handleDateChange = (date: React.SetStateAction<null>) => {
    // Handle date selection logic here
    setSelectedDate(date);
  };
  const onChange = (newDate: Date) => {
    setDate(newDate);
  };

  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        
        localizer={localizer}
        events={markData} // ใช้ข้อมูลที่แปลงมาจาก marks
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          // ทำตามต้องการเมื่อคลิกที่เหตุการณ์ในปฏิทิน
          console.log('Event clicked:', event);
        }}
        onSelectSlot={(slotInfo) => {
          // ทำตามต้องการเมื่อเลือกช่วงเวลาในปฏิทิน
          console.log('Slot selected:', slotInfo);
        }}
      />
    </div>
  );
}

export default MyCalendar;
