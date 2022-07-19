import React, {useEffect, useState} from "react";
import Header from "./conponents/Header";
import Body from "./conponents/Body";
import moment from "moment";
import {useDispatch} from "react-redux";
import {getEventsListRequest} from "./state/actions";


function App() {
    moment.updateLocale('en', {week: {dow: 1}});
    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf("month").startOf("week");
    const dispatch = useDispatch();




    const totalDays = 42

    const prevHandleClick = () => setToday(prev => prev.clone().subtract(1, 'month'));
    const todayHandleClick = () => setToday(moment())
    const nextHandleClick = () => setToday(prev => prev.clone().add(1, 'month'));

    const startDayQuery = startDay.clone().format("X");
    const endDayQuery = startDay.clone().add(totalDays, "days").format("X")

    window.moment = moment

    useEffect( () => {
        dispatch(getEventsListRequest(startDayQuery,endDayQuery));
    }, [today])

    return (
        <div className="baseStyles">
            <Header
                prevHandleClick={prevHandleClick}
                todayHandleClick={todayHandleClick}
                nextHandleClick={nextHandleClick}
                today={today}
            />
            <Body
                  startDay={startDay}
                  today={today}
                  totalDays={totalDays}
                  startDayQuery={startDayQuery}
                  endDayQuery={endDayQuery}
            />
        </div>
    );
}

export default App;
