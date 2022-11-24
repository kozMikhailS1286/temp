import React from 'react';
import './App.css';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRaiting/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App(props: any) {
    console.log("App rendering");
  return (
    <div>
      <OnOff />
      <OnOff />
      <OnOff />
      <OnOff />

      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledAccordion titleValue={"Users"} />

      <UncontrolledRating />

      {/* <OnOff />
      <OnOff />

      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/> */}
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
