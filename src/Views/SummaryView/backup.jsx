import "./styles.css";
import __html from "./tuVung";
export var template = __html.map((item)=> {return({__html: item} )});
console.log(template);
// import { Grid, Card, Text } from "@nextui-org/react";
import { SummaryView } from "./SummaryView";

export default SummaryView;
