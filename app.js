const items = document.querySelectorAll("#icon");

console.log(items);
items.forEach((el) =>
  el.addEventListener("mouseover", function (e) {
    el.style.transform = "scale(1.3)";
  })
);

items.forEach((el) =>
  el.addEventListener("mouseout", function (e) {
    el.style.transform = "scale(1)";
  })
);

console.log("OK");
console.log(document.querySelector(".nav__links"));
