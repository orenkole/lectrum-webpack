export default (text = "hello!") => {
  const element = document.createElement("div")
  element.innerHTML = text;
  return element;
}