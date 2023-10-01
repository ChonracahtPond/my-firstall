import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

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
  // Add other properties if there are more
}

function MyCalendar() {
  const [markData, setMarkData] = useState<Mark[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch('/api/mark')
      .then((response) => response.json())
      .then((data) => {
        setMarkData(data.mark);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  const handleDateChange = (date: Date) => {
    // Handle date selection logic here
    setSelectedDate(date);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Calendar
           
            value={selectedDate}
            tileContent={({ date, view }) => {
          
              return <div>Custom Content</div>;
            }}
          />
          {/* Render events or details for the selectedDate */}
          {selectedDate && (
            <div>
              <h2>Events for {selectedDate.toLocaleDateString()}</h2>
              {/* Render events for the selectedDate here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MyCalendar;
