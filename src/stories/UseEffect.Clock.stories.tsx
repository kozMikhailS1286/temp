import React, {useEffect, useState} from "react";

export default {
    title: "Clock",
}

export const Clock = () => {

    const [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);



    useEffect(()=> {
    const update = () => {
        const date = new Date();
        setHour(date.getHours());
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());
    }
        setInterval(update, 1000)
    },[])





    return <>
        Time: {hour} : {minute} : {second}
    </>
}