let inputText = document.querySelector(".inputText");
let btn = document.querySelector("button");
let lists = document.querySelector(".lists");

btn.onclick = function () {
  if (inputText.value === "") {
    alert("Please Add Task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    let span = document.createElement("span");
    span.innerHTML = "Delete";
    li.appendChild(span);
    lists.appendChild(li);
  }
  inputText.value = "";
  localData();
};

lists.addEventListener("click", function (d) {
  if (d.target.tagName === "LI") {
    d.target.classList.toggle("checked");
    localData();
  }
  if (d.target.tagName === "SPAN") {
    d.target.parentElement.remove();
    localData();
  }
});

function localData() {
  localStorage.setItem("data", Object(lists.innerHTML));
}

function returnData() {
  lists.innerHTML = localStorage.getItem("data");
}

returnData();
