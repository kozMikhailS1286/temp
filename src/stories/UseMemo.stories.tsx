import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    },[a])
    // если оставить пустой массив в useMemo, то значит useMemo запомнится один раз и всегда
    // будет возвращаться пустое значение.
    // а если мы туда пишем например "а", то значит если "а" не поменятеся, то не надо запускать его подсчет.



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS SECRET") // Не будет срабатывать, т.к. пропсы не изменились и используя React.memo
    // она не перерисовывается. Т.к. данные именно компоненты Users не поменялись.
    return <div>{
        props.users.map((u, i) => <div key={i}> {u} </div>)
    }</div>
}

const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    // const newArray = users.filter(u => u.toLowerCase().indexOf("a") >  -1)
    // Раз создается новый массив, значит что-то в нем изменилось, поэтому useMemo не срабатывает.
    // Поэтому, чтоб фильрация работала совместно с useMemo, пишем так:
    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") >  -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=>{setCounter(counter+1)}}> + </button>
        <button onClick={()=>{addUser()}}> addUser </button>
        {counter}
        <Users users={newArray}/>
        {/*Использует Users, а сам Users использует UserSecret*/}
    </>
}