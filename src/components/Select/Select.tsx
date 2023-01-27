import React from "react";


type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
    collapsed: boolean
    onClick: (value: any) => void
}

export function Select(props: SelectPropsType) {
    return  (
        <div>
            <SelectTitle title={props.value} onChange={props.onChange} />
            {!props.collapsed && <SelectBody items={props.items} onClick={props.onClick} /> }
        </div>
    )
}

type SelectTitlePropsType = {
    title: string
    onChange: (value: any) => void
}

export function SelectTitle(props: SelectTitlePropsType) {
    return (
        <div onClick={props.onChange}>
            {props.title}
        </div>
    )
}

type SelectBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function SelectBody(props: SelectBodyPropsType) {
    return  <div>
                {props.items.map((i, index) => <div onClick={()=>{props.onClick(i.value)}} key={index}> {i.title} </div>)}
            </div>
        }

export default Select;