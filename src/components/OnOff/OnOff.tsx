import React from "react";

type OnOffPropsType = {
    isDone: boolean
}

export function OnOff(props: OnOffPropsType) {
    console.log("OnOff");
    return (<div>
        { props.isDone && <Svitch /> }
    </div>
    )
}


function Svitch() {
    console.log("Svitch");
        return <span> <b> Svitch </b> </span>
}