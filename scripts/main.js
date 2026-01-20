const myImage = document.querySelector("img");
const revealButton = document.querySelector("#reveal-fox");
const hideButton = document.querySelector("#hide-fox");
const changeUserButton = document.querySelector("#change-user");
const myHeading = document.querySelector("h1");

const defaultFoxSrc = "images/firefox-icon.png";
const surpriseFoxSrc = "images/firefox2.png";

const lockImageSize = () => {
  if (myImage.dataset.lockedSize === "true") return; // Avoid resizing after first lock
  const { naturalWidth, naturalHeight } = myImage;
  if (naturalWidth && naturalHeight) {
    myImage.setAttribute("width", naturalWidth);
    myImage.setAttribute("height", naturalHeight);
    myImage.dataset.lockedSize = "true";
  }
};

if (myImage.complete) {
  lockImageSize();
} else {
  myImage.addEventListener("load", lockImageSize, { once: true });
}

const showSurpriseFox = () => {
  myImage.setAttribute("src", surpriseFoxSrc);
};

const hideSurpriseFox = () => {
  myImage.setAttribute("src", defaultFoxSrc);
};

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  myImage.setAttribute("src", mySrc === defaultFoxSrc ? surpriseFoxSrc : defaultFoxSrc);
});

revealButton?.addEventListener("click", showSurpriseFox);
hideButton?.addEventListener("click", hideSurpriseFox);

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

changeUserButton?.addEventListener("click", () => {
  setUserName();
});