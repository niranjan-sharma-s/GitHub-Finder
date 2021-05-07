//Instantiate gitHub user
const github = new GitHub();

//initiatiate UI class
const ui = new UI();

//get user input
const searchUser = document.getElementById("searchUser");

//Add Event listenner
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    //make http call to get data
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Alert user not found ui.js
        ui.showAlert("user not found", "alert alert-danger");
      } else {
        //Display results ui.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile ui.js
    ui.clearProfile();
  }
});

console.log("comment");
