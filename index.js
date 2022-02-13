// components
import {login} from "./components/login.js";
import {signup} from "./components/signup.js";
import {createblog} from "./components/createblog.js";
// services
import {signupAuth, logOutUser, loginUser, onAuthChange, signInUserWithGoogle} from "./helper/auth.js";
import { createBlogs, deleteBlogs, profileStore, readBlogs, updateBlogs } from "./helper/store.js";
// assigning components
const handelLogin = document.querySelector("#login");

const handelMainpage = document.querySelector("#mainpage");
const handelSignup = document.querySelector("#signup");
const handelCreateblog = document.querySelector("#createblog");
const handelUpdateblog = document.querySelector("#updateblog");
const handelDeleteblog = document.querySelector("#deleteblog");
const mainContainer = document.querySelector(".main-container");
const handelLogout = document.querySelector("#logout");
const handelDropdown = document.querySelector("#dropdown");
const handelProfile = document.querySelector("#profile");
const loginwithgoogle = document.querySelector("#loginwithgoogle")
// render components

readBlogs();
handelLogin.addEventListener("click", (e) => {
    addFunction(login);
    loginUser(readBlogs);
});

// loginwithgoogle.addEventListener("click", (e) => {
//     signInUserWithGoogle(readBlogs);
    
// });

handelSignup.addEventListener("click", (e) => {
    addFunction(signup);
    signupAuth(readBlogs);
});
handelCreateblog.addEventListener("click", (e) => {
    addFunction(createblog);
    createBlogs();
});
handelMainpage.addEventListener("click", (e) => {
    readBlogs();
})
handelLogout.addEventListener("click", (e) => {
    e.preventDefault();
    logOutUser();
    readBlogs();
})
handelProfile.addEventListener("click", (e) => {
    profileStore();
})
handelUpdateblog.addEventListener("click", (e) => {
    updateBlogs();
})
handelDeleteblog.addEventListener("click", (e) => {
    deleteBlogs();
})
console.log(handelDropdown);
onAuthChange(handelDropdown, handelLogin, handelSignup, handelLogout , loginwithgoogle);
function addFunction(fun) {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = fun();
}  