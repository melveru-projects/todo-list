//select needed elements and store them in the cache
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

//check for the input length
function inputLength(){
	console.log(input.value.length);
	return input.value.length;
}

//mark task done
function markDone(){
	this.classList.toggle("done");
}
//event listener
function completedTask() {
	for(var i=0; i<li.length; i++){
		li[i].addEventListener("click", markDone);
	}
}
//add delete button
function addDelBtn() {
	for(var i=0; i<li.length; i++){
		var delBtn = document.createElement("button");
		delBtn.innerHTML = "Delete";
		var numChildren = li[i].childElementCount;
		if( li[i].childElementCount === 0){
			li[i].appendChild(delBtn);
		} console.log(li[i].childElementCount);
		delBtn.addEventListener("click", deleteTask);
	}
}

//delete list item
function deleteTask(){
	this.parentElement.classList.toggle("delete");
}

//add the new item to the buttom of the list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	console.log("log", li);
	input.value = "";
	completedTask();
	addDelBtn();
}

//if there was an input of more then 0 characters and a click on the button
function addListAfterClick() {
	if (inputLength() > 0 ){
		createListElement();
	}
}

//if there was an input of more then 0 characters and a click on the button
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 ){
		createListElement();
	}
}

//call the above functions
button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress);
completedTask();
addDelBtn();
