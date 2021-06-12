import './Calendar.css';
import React from 'react';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
// import { Transform } from 'stream';
// import { translateRect } from '@fullcalendar/common';

function Calendar()  {
    return(
        <div className="calendar">
            <CalendarComponent style = {{border :'solid',borderColor: 'white',maxWidth :'310px',minWidth : '300px',minHeight : '325px',maxHeight :'325px' }}></CalendarComponent>
            <div className="EventList">Events</div>
        </div>
    );
}
export default Calendar;