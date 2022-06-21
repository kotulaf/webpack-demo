const React = require("react");
const ReactDOM = require("react-dom");
const SSR = <div onClick={() => alert("hello")}>Do We Have a Problem?</div>

if(typeof document === "undefined") {
    module.exports = SSR;
}else {
    ReactDOM.hydrate(SSR, document.getElementById("app"));
}