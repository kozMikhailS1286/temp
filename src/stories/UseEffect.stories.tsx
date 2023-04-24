import React, {ChangeEvent, useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    // useEffect(()=> {
    //     console.log("UseEffect")
    //     document.title = counter.toString();
    // }, [counter])

    // Коментарий к коду выше: Если мы не передали зависимость (в квадратных скобках), то
    // useEffect будет перезапускаться каждый раз, а если положили
    // зависимость (counter), то useEffect будет перезапускаться
    // только когда изменится counter.

    useEffect(()=> {
        console.log("UseEffect every render")
        document.title = counter.toString();
    })

    useEffect(()=> {
        console.log("UseEffect only first render analog 'componentDidMount'")
        document.title = counter.toString();
    }, [])

    useEffect(()=> {
        console.log("UseEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={()=>{setCounter(counter + 1)}}> counter + </button>
        <button onClick={()=>{setFake(fake + 1)}}> fake + </button>
    </>
}

// Комментарий к коду выше: Сначала происходит отрисовка всего конетента (с верху в низ), потом запускается useEffect,
// т.е. при нажатии на "+" сначала отрисуется "3" на странице, а потом, уже после
// выполнения всего кода с верху вниз, сработает (интерпретатор вернется наверх)
// к useEffect.


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")


    // useEffect(()=> {
    //
    //     setTimeout(()=>{
    //         console.log("setTimeout")
    //         document.title = counter.toString();
    //     }, 1000);
    //
    // },[counter])


    // useEffect(()=> {
    //
    //     setInterval(()=>{
    //        console.log("tick " + counter)
    //         setCounter(counter+1)
    //     }, 1000);
    //
    // },[])

    // useEffect(()=> {
    //
    //     setInterval(()=>{
    //         console.log("tick " + counter)
    //         setCounter((state) => state + 1)
    //     }, 1000);
    //
    // },[])

    // Такая запись: "(state) => state + 1", берет актуальное занчение "counter"
    // Такая запись: ""tick " + counter", берет из замыкания "counter", который
    // был со старта.

    return <>
        Hello, {counter}
        <button onClick={()=>{setCounter(counter + 1)}}> counter + </button>
    </>
}