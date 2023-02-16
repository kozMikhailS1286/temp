import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import { UncontrolledAccordion } from "./UncontrolledAccordion";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion
}


export function UncontrolledAccordionU () {

    const[state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            <AccordionTitle title={"Users"} onClick={()=>{
                dispatch({type: TOGGLE_COLLAPSED})}}/>
            { !state.collapsed && <AccordionBody/> }
        </div>
    );
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={ () => {props.onClick()} }> -- {props.title} -- </h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
        </ul>
    );
}