// JavaScript Document

//To Unhide with Slide Starting Units Section

$("#pi-section button").on("click", function(){	
	
	$("#su-section").slideDown().removeClass("no-initial-display");	

});


//Colouring the Categories Navigation on Hover In and Out

$("#cat-nv-section li").on("mouseenter", function(event){		
	$(event.currentTarget).removeClass("black");	
});

$("#cat-nv-section li").on("mouseleave", function(){	
	$(event.currentTarget).addClass("black");	
});


//Changing the colour of H3 in categories section // Changing units for a particular category --milk--


if ($(".categories h3").text().toLowerCase() === "starch" ) {
	$(".categories h3").addClass("yellow");
} else if ($(".categories h3").text().toLowerCase() === "protein" ) {
	$(".categories h3").addClass("blue");
} else if ($(".categories h3").text().toLowerCase() === "fat" ) {
	$(".categories h3").addClass("red");
	$(".categories th:nth-child(3)").text("Remarks");
} else if ($(".categories h3").text().toLowerCase() === "milk" ) {
	$(".categories h3").addClass("light-blue");
	$(".categories th:nth-child(2)").text("Amount (ml)");
	$(".categories th:nth-child(3)").text("Remarks");
} else if ($(".categories h3").text().toLowerCase() === "fruit" ) {
	$(".categories h3").addClass("orange");
	$(".categories th:nth-child(3)").text("Remarks");
} else if ($(".categories h3").text().toLowerCase() === "veggies" ) {
	$(".categories h3").addClass("green");
	$(".categories th:nth-child(3)").text("Remarks");
} else {
	$(".categories h3").addClass("black");
}


//Inserting Icons with words in Food States in categories section

let lengthOFStateList = document.querySelectorAll(".food-state-icon").length;

for (i=0; i<lengthOFStateList; i++) {
	
	if (document.querySelectorAll(".food-state-icon")[i].innerText === "Cooked") { 
		document.querySelectorAll(".food-state-icon")[i].classList.add("cooked"); 
	} 	else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Uncooked") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("uncooked"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Frozen") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("frozen"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Raw") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("raw"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "One Whole") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("egg"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Fruit") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("apple"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Low Fat") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("low-fat"); 
	}   else if (document.querySelectorAll(".food-state-icon")[i].innerText === "Fat Free") {
		document.querySelectorAll(".food-state-icon")[i].classList.add("fat-free"); 
	}
	
}

	$('<i class="fa-solid fa-fire-burner"></i>').prependTo(".cooked");
	$('<i class="fa-solid fa-utensils"></i>').prependTo(".uncooked");
	$('<i class="fa-solid fa-icicles"></i>').prependTo(".frozen");
	$('<i class="fa-solid fa-drumstick-bite"></i>').prependTo(".raw");
	$('<i class="fa-solid fa-egg"></i>').prependTo(".egg");
	$('<i class="fa-solid fa-apple-whole"></i>').prependTo(".apple");
	$('<i class="fa-solid fa-angles-down"></i>').prependTo(".low-fat");
	$('<i class="fa-solid fa-0"></i>').prependTo(".fat-free");
	

//Testing Code

$("#eaten").on("click", test)

function test() {

  var example = $(".remaining-units-table td")[2].innerText;

  $(".remaining-units-table td")[2].innerText = example - 1;

}
