import "./ButtonOne.scss";

class ButtonOne {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me!";
    button.classList.add("green-button");
    const body = document.querySelector("body");
    body.append(button);
  }
}

export default ButtonOne;
