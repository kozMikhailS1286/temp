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


export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")


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

    useEffect(()=> {

        const intervalId = setInterval(()=>{
            console.log("tick " + counter)
            setCounter((state) => state + 1)
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    },[])

    // Такая запись: "(state) => state + 1", берет актуальное занчение "counter"
    // Такая запись: ""tick " + counter", берет из замыкания "counter", который
    // был со старта.

    return <>
        Hello, {counter}
        <button onClick={()=>{setCounter(counter + 1)}}> counter + </button>
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("ResetEffectExample " + counter)

    useEffect(() => {
        console.log("Effect occurred " + counter)

        // ниже пишем так чтоб сбросить эффект.
        // Так надо для того, чтоб при умирании компоненты она не использовала память.
        return () => {
            console.log('Reset Effect ' + counter)
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return  <>
                Hello, counter: {counter}
                <button onClick={increase}> counter +</button>
            </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("KeysTrackerExample " + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)

        // Чтоб зачистить здесь, надо писать строго как внизу:
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])


    return  <>
        Typed text: {text}
    </>
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log("SetTimeoutExample " + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 second passed')
        }, 3000)

        // Даде тут надо зачищаться, т.к. компонента может не прожить эти 3 сек
        // и по сути отрисуется в убитой компоненте.
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return  <>
        Typed text: {text}
    </>
}