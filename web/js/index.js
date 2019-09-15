const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

counter = 0;

function showLoading() {
  const existingLoader = document.querySelector(".loader");
  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.innerHTML = "&#9881;";
  document.body.appendChild(loader);
}

function removeLoading() {
  const loader = document.querySelector(".loader");
  if (loader) {
    document.body.removeChild(loader);
  }
}

async function onClick() {
  if (counter === 0) {
    showLoading();
  }
  counter++;
  console.log(`clicked ${counter}`);
  var res;
  try {
    res = await doSomething(counter);
    console.log(res);
  } finally {
    counter--;
    if (counter === 0) {
      removeLoading();
    }
  }
  return res;
}

btn1.addEventListener("click", onClick);
btn2.addEventListener("click", onClick);

function doSomething(c) {
  var random = Math.random() * 10000;
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(`${c} has returned`), random);
  });
}

