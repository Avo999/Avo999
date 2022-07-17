import React, {useState} from "react";
import Header from "./conponents/Header";
import Body from "./conponents/Body";
import moment from "moment";


function App() {
    moment.updateLocale('en', {week: {dow: 1}});
    const [currentYear, setCurrentYear] = useState(moment().format("YYYY"));
    const [currentMouth, setCurrentMouth] = useState(moment().format("MMMM"))

    const startDay = moment().startOf("month").startOf("week")

    return (
        <div className="baseStyles">
            <Header
                currentMouth={currentMouth}
                currentYear={currentYear}

            />
            <Body startDay={startDay}/>
        </div>
    );
}

export default App;
