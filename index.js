const question = document.querySelectorAll(".question");
const contentBox = document.querySelectorAll(".content-box");
console.log(contentBox);

// question.forEach(function (question) {
//   question.addEventListener("click", function (event) {
//     event.target.parentElement.classList.toggle("active");
//   });
// });

question.forEach(function (question) {
  question.addEventListener("click", function (event) {
    if (event.target.parentElement.classList.contains("active")) {
      event.target.parentElement.classList.remove("active");
    } else {
      contentBox.forEach(function (box) {
        box.classList.remove("active");
      });
      event.target.parentElement.classList.add("active");
    }
  });
});
