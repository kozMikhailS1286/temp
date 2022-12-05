import React, { useState } from 'react';
import './App.css';
import {RaitingValueType, Rating} from './components/Rating/Rating'
import UncontrolledRating from './components/UncontrolledRaiting/UncontrolledRating'
import Accordion from './components/Accordion/Accordion'
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff'
import OnOff from './components/OnOff/OnOff';

function App(props: any) {
    console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RaitingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let[switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledRating />
      <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
      {/* <OnOff on={switchOn} onChange={setSwitchOn}/> */}
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering");
    return (
        <h1> {props.title} </h1>
    )
}

export default App;
