let email = document.querySelector("#email");
let password = document.querySelector("#password");
let subbtn = document.querySelector("#subbtn");

subbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(localStorage);
    if (email.value === "" || password.value === "") {
      alert("Fields should not be empty");
    } 
    else
    {
        const localStorageValues = Object.values(localStorage).map((val) =>
            JSON.parse(val)
        );
        console.log(Object.entries(localStorageValues));    
        const findUser = Object.entries(localStorageValues).find(
            (val) => val[1].email === email.value
          );
          console.log(findUser[1]);
          if (findUser[1].password === password.value) {
            const userDetails = {
              id: findUser[1].id,
              username: findUser[1].username,
              email: findUser[1].email,
            };
            sessionStorage.setItem(findUser[1].username, JSON.stringify(userDetails));
            window.location.href = `./crud_page.html?id=${findUser[1].id}`;
          }
          else {
            alert("Invalid credentials / User does not exists");
          }
    }
})