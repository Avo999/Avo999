import React, {useState} from 'react';
import moment from "moment";
import * as events from "events";

function Body({startDay, today, totalDays, events}) {
    const week = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];

    const day = startDay.clone().subtract(1, 'day');

    const calendarArr = [...Array(totalDays)].map(() => day.add(1, "day").clone());

    const isCurrentMouth = (day) => today.isSame(day, 'month')
    return (
        <div className="tableCal">
            {
                week.map(week => (
                    <div key={week} className={week === "Sat" || week === "Sun" ? "bg-dark elem" : "elem"}>{week}</div>
                ))
            }

            {
                calendarArr.map((day) => (
                    <div key={day.unix()} className={`${isCurrentMouth(day) ? "elem" : 'otherMouth elem'}
                        ${day.day() === 0 || day.day() === 6 ? "bg-dark elem" : "elem"} 
                       
                    `}>
                        <span className={
                            day.clone().format("YYYY-MM-DD") === moment().format('YYYY-MM-DD') ? "currentDay" : ""
                        }>
                            {day.format("D")}
                        </span>
                        <div>
                            {
                                events.filter(event => event.date >= day.format("X") && event.date <= day.clone().endOf("day").format("X"))
                                    .map(event => (
                                        <div key={event.date}
                                             className=''
                                        >{event.title}</div>
                                    ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Body;