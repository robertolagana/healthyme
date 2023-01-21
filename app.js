// JavaScript Document

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const date = require(__dirname + "/public/date.js");
const list = require(__dirname + "/public/categorylist.js");

const app = express();

let yourName = "";
let buttonCount = 0;
let userFoodsList = [];
let userWeightsList = [];
let foodItem = "starch";
let redunderlineClass = "";


app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
  res.render("homepage");
});


app.post("/", function (req, res) {
	
  const firstName = req.body.fName;
  const lastName = req.body.lName;
	
  yourName = firstName + " " + lastName;
}); 


app.get("/foods", function (req, res) {
	
  let day = date.getDate();
	
  res.render("foods", {today: day, nameAndSurname: yourName, buttonCounting: buttonCount, foodsListItem: userFoodsList, weightsListItem: userWeightsList, redClass: redunderlineClass});	
});

app.post("/foods", function (req, res) {
	
  buttonCount++;
	
  let newFoodItem = req.body.newFood;
  let newWeightItem = req.body.newWeight;
	
	if (newFoodItem === "" || newWeightItem === "" ) {
		buttonCount--;
		redunderlineClass = "redunderline";
		res.redirect("/foods");
	} else {
  		userFoodsList.push(newFoodItem);
		userWeightsList.push(newWeightItem);
		redunderlineClass = "";
  		res.redirect("/foods");
	}
});


app.get("/categories", function (req, res){

  const whatList = list.foodCat(foodItem);
  const whatAmount = list.foodQty(foodItem);
  const whatState = list.foodState(foodItem);
	
  res.render("categories", {fList: whatList, fAmount: whatAmount, fState: whatState, fHeading: foodItem.toUpperCase()});
});


app.post("/categories", function (req, res){
	
  foodItem = req.body.fI;
	
  res.redirect("/categories");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
