import React, {useState} from "react";
import { Accordion } from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion.memo",

}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const AccordionMemo = React.memo(Accordion)

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback} />

export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}]}
                                                     onClick={onClickCallback} />

export const MadeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <AccordionMemo titleValue={"Users"}
                      collapsed={value}
                      onChange={()=>setValue(!value)}
                      items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}]}
                      onClick={(id) => {alert(`User ${id} happy`)}}
                      />
}