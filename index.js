const input = document.getElementById("input");
const delBtn = document.getElementById("del");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const number = document.getElementById("number");
const equal = document.getElementById("equal");
const multiply = document.getElementById("multiply");


const delClick = () => {
  delBtn.addEventListener('click', () => {
    const currentText = input.textContent
    input.textContent = currentText.slice(0, -1)
  })
}

delClick()

// Number buttons
const numberClick = () => {
  const numberButtons = number.querySelectorAll("button:not(#equal)");

  numberButtons.forEach((item) => {
    item.addEventListener("click", () => {
      input.textContent += item.textContent;
    });
  });
};

// Operator buttons
const signClick = () => {
  const operatorButtons = multiply.children;

  for (let item of operatorButtons) {
    item.addEventListener("click", () => {
      input.textContent += item.textContent;
    });
  }
};

// Clear button
clear.addEventListener("click", () => {
  input.textContent = "";
  result.textContent = "";
});



// Equal button
equal.addEventListener("click", () => {
    try {
  const answer = eval(input.textContent)

  if(answer){
    input.textContent = answer
  }
      result.textContent = answer  
    } catch (error) {
      console.error(error, "error when calculating") 
      result.textContent = "Syntax Error" 
    }
});

numberClick();
signClick();