// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];

  let emptyArrayTwo = [];

  if (userData) {
    people.map((item) => {
      if (
        item.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
      ) {
        emptyArrayTwo.push(item);
        return;
      }
      if (
        item.address
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase())
      ) {
        emptyArrayTwo.push(item);
        return;
      }
      if (
        item.category
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase())
      ) {
        emptyArrayTwo.push(item);
        return;
      }
    });

    emptyArray = emptyArrayTwo.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data.name} - ${
        data.category
      } - ${data.address.slice(0, 5)}... <span>Mã số: ${data.id}</span></li>`);
    });

    searchWrapper.classList.add("active"); //show autocomplete box

    showSuggestions(emptyArray);
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function showSuggestions(list) {
  console.log("list.length: ", list.length);
  let listData;
  if (!list.length) {
    console.log("an");
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
