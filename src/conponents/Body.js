import React, {useState} from 'react';
import moment from "moment";

function Body({startDay}) {
    const week = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    const totalDays = 42
    const day = startDay.clone().subtract(1, 'day');

    const calendarArr = [...Array(totalDays)].map(() => day.add(1, "day").clone());

    return (
        <div className="tableCal">
                {
                    week.map(week => (
                        <div key={week} className={week === "Sat" || week === "Sun"? "bg-dark elem": "elem"}>{week}</div>
                    ))
                }

            {
                calendarArr.map((day) => (
                    <div  key={day} className={day.day() === 0 || day.day() === 6 ? "bg-dark elem" : "elem"}>
                        <span className={day.clone().format("YYYY-MM-DD") === moment().format('YYYY-MM-DD') ? "currentDay": ""}>
                            {day.format("D")}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Body;