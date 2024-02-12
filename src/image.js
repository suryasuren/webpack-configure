import FoodImage from "./food.jpeg";

function addImage() {
  const img = document.createElement("img");
  img.src = FoodImage;
  const body = document.querySelector("body");
  body.append(img);
}

export default addImage;
