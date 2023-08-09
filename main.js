// Header
const linkOne = document.getElementById("link1");
const linkTwo = document.getElementById("link2");
const linkThree = document.getElementById("link3");
const linkFour = document.getElementById("link4");
const linkFive = document.getElementById("link5");
const clickShowLink = document.getElementById("clickShowLink");
const showLink = document.getElementById("showLink");
const mobileStyle1 = document.querySelector(".mobile-style1");
const mobileStyle2 = document.querySelector(".mobile-style2");
const mobileStyle3 = document.querySelector(".mobile-style3");
const mobileStyle4 = document.querySelector(".mobile-style4");
const mobileStyle5 = document.querySelector(".mobile-style5");

function hideLink() {
  showLink.style.cssText = "@media (max-width: 991px) {.header .box .link {display: none;}}";
}
linkOne.addEventListener("click", () => {
  linkOne.classList.toggle("active");
  linkTwo.classList.remove("active");
  linkThree.classList.remove("active");
  linkFour.classList.remove("active");
  linkFive.classList.remove("active");
  hideLink()
});
linkTwo.addEventListener("click", () => {
  linkTwo.classList.toggle("active");
  linkOne.classList.remove("active");
  linkThree.classList.remove("active");
  linkFour.classList.remove("active");
  linkFive.classList.remove("active");
});
linkThree.addEventListener("click", () => {
  linkThree.classList.toggle("active");
  linkOne.classList.remove("active");
  linkTwo.classList.remove("active");
  linkFour.classList.remove("active");
  linkFive.classList.remove("active");
});
linkFour.addEventListener("click", () => {
  linkFour.classList.toggle("active");
  linkOne.classList.remove("active");
  linkTwo.classList.remove("active");
  linkThree.classList.remove("active");
  linkFive.classList.remove("active");
});
linkFive.addEventListener("click", () => {
  linkFive.classList.toggle("active");
  linkOne.classList.remove("active");
  linkTwo.classList.remove("active");
  linkThree.classList.remove("active");
  linkFour.classList.remove("active");
});

clickShowLink.addEventListener("click", () => {
  showLink.style.cssText = "display: block;position: absolute;left: 8px;z-index: 1;top: 122px;background-color: #11366159;width: calc(100% - 17px);";
  mobileStyle1.style.cssText = "display: block;width: 100%;max-width: 100%; text-align: center; margin-bottom: 20px;margin-left: 0px;margin-top: 20px;";
  mobileStyle2.style.cssText = "display: block;width: 100%;max-width: 100%; text-align: center; margin-bottom: 20px;margin-left: 0px;";
  mobileStyle3.style.cssText = "display: block;width: 100%;max-width: 100%; text-align: center; margin-bottom: 20px;margin-left: 0px;";
  mobileStyle4.style.cssText = "display: block;width: 100%;max-width: 100%; text-align: center; margin-bottom: 20px;margin-left: 0px;";
  mobileStyle5.style.cssText = "display: block;width: 100%;max-width: 100%; text-align: center; margin-bottom: 20px;margin-left: 0px;";

});
// Home
const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");
const toggleButton3 = document.getElementById("toggleButton3");
const toggleButton4 = document.getElementById("toggleButton4");
const imageHome = document.getElementById("image-home");
const targetElement = document.getElementById("targetElement");

toggleButton1.addEventListener("click", () => {
  toggleButton1.classList.toggle("active");
  toggleButton2.classList.remove("active");
  toggleButton3.classList.remove("active");
  toggleButton4.classList.remove("active");
  imageHome.classList.toggle("image-home1");
  imageHome.classList.remove("image-home2");
  imageHome.classList.remove("image-home3");
  imageHome.classList.remove("image-home4");
});
toggleButton2.addEventListener("click", () => {
  toggleButton2.classList.toggle("active");
  toggleButton1.classList.remove("active");
  toggleButton3.classList.remove("active");
  toggleButton4.classList.remove("active");
  imageHome.classList.toggle("image-home2");
  imageHome.classList.remove("image-home1");
  imageHome.classList.remove("image-home3");
  imageHome.classList.remove("image-home4");
});
toggleButton3.addEventListener("click", () => {
  toggleButton3.classList.toggle("active");
  toggleButton1.classList.remove("active");
  toggleButton2.classList.remove("active");
  toggleButton4.classList.remove("active");
  imageHome.classList.toggle("image-home3");
  imageHome.classList.remove("image-home1");
  imageHome.classList.remove("image-home2");
  imageHome.classList.remove("image-home4");
});
toggleButton4.addEventListener("click", () => {
  toggleButton4.classList.toggle("active");
  toggleButton1.classList.remove("active");
  toggleButton2.classList.remove("active");
  toggleButton3.classList.remove("active");
  imageHome.classList.toggle("image-home4");
  imageHome.classList.remove("image-home1");
  imageHome.classList.remove("image-home2");
  imageHome.classList.remove("image-home3");
});