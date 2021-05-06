const toDoList = ["This", "That"];

// let userInput = "suuuuup";
let userInput = prompt("Please enter a command for your todo list");

let addNew = (command) => {
	let todoItem = prompt("What would you like to add to the todo list?");
	toDoList.push(todoItem);
	console.log(toDoList);
};

let 

while (userInput !== "quit") {
	if (userInput === "new") {
		addNew(userInput);
		userInput = prompt("What would you like to do next?");
	} else if (userInput === "list") {
		// console.log("list");
	} else if (userInput === "delete") {
		// console.log("delete");
	} else {
	}
}
console.log("See ya lata!!");
addNew("And more");
