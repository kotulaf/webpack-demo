export default (text = "do we have a problem?") => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
}