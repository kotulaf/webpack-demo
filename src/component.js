export default (text = "do we have a problem?") => {
    const element = document.createElement("div");
    element.className = "rounded bg-red-100 border max-w-md m-4 p-4"
    element.innerHTML = text;
    return element;
}