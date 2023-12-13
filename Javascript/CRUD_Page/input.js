let addEmpHead = document.querySelector("#addEmpHead");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let eml = document.querySelector("#email");
let sal = document.querySelector("#sal");
let SalDate = document.querySelector("#dte");
let subbtn = document.querySelector("#subbtn");
let cancel = document.querySelector("#cancel");

let UrlId = new URLSearchParams(location.search);
let paramId = UrlId.get("id");
let userId = UrlId.get("userId");
console.log(userId);
let existingData = JSON.parse(localStorage.getItem(paramId)) || {
  userData: {},
};
let findData = existingData.userData || {};

if (userId !== null) {
  addEmpHead.innerText = "Update Employee Page";
  subbtn.innerText = "Update";
  updateUser(findData);
}
// else {
//   // newuser();
// }

cancel.addEventListener("click", function () {
  window.location.href = `./crud_page.html?id=${paramId}`;
});

subbtn.addEventListener("click", (e) => {
  console.log(fname.value);
  console.log(SalDate.value);
  e.preventDefault();
  if (
    fname.value === "" ||
    lname.value === "" ||
    eml.value === "" ||
    sal.value === "" ||
    SalDate.value === ""
  ) {
    window.alert("All fields mandatory");
  } else {
    addUpdate();
    window.location.href = `./crud_page.html?id=${paramId}`;
  }
});

function updateUser(findData) {
  const existingUserData = findData[userId];
  fname.value = existingUserData.firstname;
  lname.value = existingUserData.lastname;
  eml.value = existingUserData.email;
  sal.value = existingUserData.salary;
  SalDate.value = existingUserData.date;
}

function newuser() {
  let newUserId = Math.floor(Math.random() * 1000); // Adjust the range as needed
  findData[newUserId] = {
    userId: newUserId,
    firstname: fname.value,
    lastname: lname.value,
    email: eml.value,
    salary: sal.value,
    date: SalDate.value,
  };
}

function addUpdate() {
  let findData = existingData.userData || {};
  console.log(findData);

  let existingEmailIndex = Object.values(findData).findIndex(
    (userData) => userData.email === eml.value
  );

  if (existingEmailIndex !== -1 && userId === null) {
    alert("Email already present");
    window.location.href = `./crud_page.html?id=${paramId}`;
  }
  if (userId !== null) {
    const existingUserData = findData[userId];
    existingUserData.firstname = fname.value;
    existingUserData.lastname = lname.value;
    existingUserData.email = eml.value;
    existingUserData.salary = sal.value;
    existingUserData.date = SalDate.value;
  } else {
    newuser(findData);
  }

  localStorage.setItem(
    paramId,
    JSON.stringify({ ...existingData, userData: findData })
  );
}
