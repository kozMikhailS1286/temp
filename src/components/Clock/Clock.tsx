import React, {useEffect, useState} from 'react'


type Propstype = {

}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<Propstype> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(()=> {

        const intervalId = setInterval(()=> {
            console.log("TICK")
            setDate(new Date())
        }, 1000)

        // Далее пишем так как пишем, чтоб "убить" интервал, чтоб он
        // не пожирал память при неиспользовании компоненты:

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <div>
        <span> {get2digitsString(date.getHours())} </span>
        :
        <span> {get2digitsString(date.getMinutes())} </span>
        :
        <span> {get2digitsString(date.getSeconds())} </span>
    </div>
}