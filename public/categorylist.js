// JavaScript Document


exports.foodCat = function(value){
	
 let starchList = ["Bread","Cereal","Wraps","Rice/Pasta","Rice/Pasta","Couscous","Quinoa","Noodles","Ravioli","Toretellini","Crackers","Potatoes","Peas/Corn","Beans","Pulses", "Barley","Barley", "Lentils","Lentils","Honey"];
 let proteinList = ["Cheese","Ricotta","Gbejna","Cottage Cheese","Mozzarella","Egg","Beef","Beef","Pork","Pork","Lamb","Lamb","Veal","Veal","Rabbit","Rabbit","Fish","Fish","Chicken","Chicken","Turkey","Turkey","Ham","Ham","Canned Tuna","Bacon"];
 let milkList = ["Skimmed Milk","Semi-skimmed Milk","Full-fat Milk","Flavoured Milk","Rice Milk","Soya Milk","Light Yogurt","Light Yogurt","Greek Yogurt","Greek Yogurt","Cappuccino"];
 let fatList = ["Margerine","Margerine","Butter","Mayonnaise","Mayonnaise","Salad Dressing","Salad Dressing","Oil","Olive Oil","Olives","Nuts","Seeds","Avocado","Almond Milk"];
 let fruitList = ["Apple","Banana","Cherries","Grapes","Kiwi","Pear","Pineapple","Dried Fruit","Melon","Watermelon","Peaches","Plums","Orange","Fruit Juice","Strawberries","Kaki","Mango","Pomegranate","Blueberries","Cranberries"];
 let veggiesList = ["Vegetables"];

	
	switch (value) {
  case "starch": 
			return starchList;
    break;
  case "protein": 
			return proteinList;
    break;
  case "fat": 
			return fatList;
    break;
  case "milk": 
			return milkList;
    break;
  case "fruit": 
			return fruitList;
    break;
  case "veggies": 
			return veggiesList;
    break;
  default: return "-----";
    
}
		

}

exports.foodQty = function(value) {
	
 let starchWeight = [28,20,28,25,60,25,25,25,60,25,20,100,80,60,22,22,66,22,53,20];	
 let proteinWeight = [28,50,40,50,28,50,28,40,28,40,28,40,28,40,28,40,28,40,28,40,28,40,28,40,28,28,16];
 let milkWeight = [250,175,150,125,200,250,140,125,150,100,150];
 let fatWeight = [5,15,5,5,15,5,15,5,5,30,8,8,40,400];
 let fruitWeight = [100,70,90,90,85,110,120,20,170,190,140,110,140,125,200,75,100,75,100,20];
 let veggiesWeight = [0];
	
	
	
	switch (value) {
  case "starch": 
			return starchWeight;
    break;
  case "protein": 
			return proteinWeight;
    break;
  case "fat": 
			return fatWeight;
    break;
  case "milk": 
			return milkWeight;
    break;
  case "fruit": 
			return fruitWeight;
    break;
  case "veggies": 
			return veggiesWeight;
    break;
  default: return "-----";
    
}

}

exports.foodState = function(value) {
	
 let starchState = ["","","","Uncooked","Cooked","","","","Cooked","Uncooked","Fat Free","Uncooked","Frozen","Cooked","Uncooked", "Uncooked","Cooked", "Uncooked","Cooked",""];	
 let proteinState = ["","","","","","One Whole","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","Cooked","Raw","",""];
 let milkState = ["","","","","","","Low Fat","Fruit","Low Fat","Fruit",""];
 let fatState = ["","Low Fat","","Regular","Low Fat","Regular","Low Fat","","","","","","","",""];
 let fruitState = [""];
 let veggiesState = [""];
	
	
	
	switch (value) {
  case "starch": 
			return starchState;
    break;
  case "protein": 
			return proteinState;
    break;
  case "fat": 
			return fatState;
    break;
  case "milk": 
			return milkState;
    break;
  case "fruit": 
			return fruitState;
    break;
  case "veggies": 
			return veggiesState;
    break;
  default: return "-----";
    
}
	
	

}


