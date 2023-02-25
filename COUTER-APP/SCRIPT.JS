const CountValue = document.querySelector("#counter");

const increment = () => {
  // get the value from UI

  let value = parseInt(CountValue.innerText);

  //update the value
  value = value + 1;

  //Set the value
  CountValue.innerText = value;
};

const decrement = () => {
  let value = parseInt(CountValue.innerText);

  value = value - 1;

  CountValue.innerText = value;
};
