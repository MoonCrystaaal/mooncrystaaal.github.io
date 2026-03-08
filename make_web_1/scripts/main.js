const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test_img_1.png") {
    myImage.setAttribute("src", "images/test_img_2.png");
  } else {
    myImage.setAttribute("src", "images/test_img_1.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName)  {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `This is MIKU Color page *>_<* , wellcome ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is MIKU Color page *>_<* ${storedName}!`;
}

myButton.addEventListener("click", () => {
  setUserName();
});