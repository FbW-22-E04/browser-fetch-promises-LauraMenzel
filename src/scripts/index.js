// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const promiseFunction = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 6000);
});
promiseFunction.then(() => {
  modal.style.display = "block";
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});







