import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App(props: any) {
    console.log("App rendering");
  return (
    <div>
    {/*  <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
        Article 1
      <Rating value={3}/>*/}
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <OnOff isDone={true} />
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
