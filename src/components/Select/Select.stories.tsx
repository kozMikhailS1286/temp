import React, {useState} from "react";
import { Select } from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select",
    component: Select
}

const callback = action("select mode change event fired")
const onClickCallback = action("some item was clicked")

export const SelectCollapsedMode = () => <Select value={"Menu"}
                                                 collapsed={true}
                                                 onChange={callback}
                                                 items={[]}
                                                 onClick={onClickCallback}
/>

export const SelectUncollapsedMode = () => <Select   value={"Users"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}]}
                                                     onClick={onClickCallback}
/>

export const SelectChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Select value={"Users"}
                   collapsed={value}
                   onChange={()=>setValue(!value)}
                   items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}]}
                   onClick={(id) => {alert(`User ${id} happy`)}}
    />
}