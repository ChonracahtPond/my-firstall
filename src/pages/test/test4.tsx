import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Mark } from '@prisma/client';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {



    const [filteredregfromsData, setFilteredregfromsData] = useState<
    Mark[]
  >([]);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                // ดึงข้อมูลจาก API
                const response = await fetch('api/mark');
                if (!response.ok) {
                    throw new Error('ไม่สามารถดึงข้อมูลได้');
                }

                // แปลงข้อมูล JSON จาก API
                const filterMarkData = await response.json();

                // สร้าง events ที่เหมาะสมสำหรับปฏิทิน
                const calendarEvents = filterMarkData.map((item: { title: any; date: string | number | Date; }) => ({
                    title: item.title, // ชื่อเหตุการณ์
                    start: new Date(item.date), // วันเริ่มต้นเหตุการณ์
                    end: new Date(item.date), // วันสิ้นสุดเหตุการณ์
                }));

                setEvents(calendarEvents);
            } catch (error) {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
            }
        };

        fetchDataFromApi();
    }, []);


    // const events = [
    //     {
    //         title: 'เหตุการณ์ที่ 1',
    //         start: new Date(2023, 9, 5),
    //         end: new Date(2023, 9, 5), 
    //     },
    //     {
    //         title: 'เหตุการณ์ที่ 2',
    //         start: new Date(2023, 9, 2),
    //         end: new Date(2023, 9, 3),
    //     },
     
    // ];


    return (
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
};

export default MyCalendar;
