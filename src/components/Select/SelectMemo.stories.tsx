import React, {useState} from "react";
import { Select } from "./Select";


export default {
    title: "Select Memo",
    component: Select
}

const SelectMemo = React.memo(Select)

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <>
        <SelectMemo onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"},
                ]} />
    </>
}

export const WithoutValue = () => {
const [value, setValue] = useState(null)
    return <>
        <SelectMemo onChange={setValue}
                value={null}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"},
                ]} />
    </>
}