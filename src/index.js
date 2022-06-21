import component from "./component";
import "./main.css";
import "react";
import "react-dom";
import { bake } from "./shake";

bake();

console.log("webpack demo");

document.body.appendChild(component());