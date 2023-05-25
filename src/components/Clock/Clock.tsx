import React, {useEffect, useState} from 'react'
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";


type PropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)

        // Далее пишем так как пишем, чтоб "убить" интервал, чтоб он
        // не пожирал память при неиспользовании компоненты:

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}