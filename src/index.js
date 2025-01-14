import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
console.log(Sdata[4]);
ReactDOM.render(
  <>
    <h1 className="heading_style">List Of 5 Netflix Series</h1>
    <Card
      imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgscr}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].imgscr}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].link}
    />
  </>,
  document.getElementById("root")
);
