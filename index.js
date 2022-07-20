const secondInput = document.getElementById("Input2");
const firstInput = document.getElementById("Input1");
const equals = document.getElementById("equals");
let Isfocused = false;
document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("Input2").focus();
  Isfocused = true;
});

document.querySelectorAll("button").forEach(
  function (item, index) {
    item.addEventListener("click", () => {
        Isfocused
          ? (secondInput.value += index + 1)
          : (firstInput.value += index + 1);
      }
    );
  }
);
equals.addEventListener("click", () => {
  const result = parseInt(firstInput.value) + parseInt(secondInput.value);
  equals.innerHTML += result;
});
