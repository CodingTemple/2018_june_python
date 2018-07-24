// // var contentDiv = document.getElementById('content');
// // // contentDiv.innerHTML = "This is the content div.";

// // var classList = document.querySelectorAll('.enter_here');

// // // for(var i=0; i<classList.length; i++)
// // // {
// // //   classList[i].innerHTML = "This is a list item";
// // // }

// // // document.getElementsByClassName('enter_here') - returns list
// // // document.getElementById('content') - returns single item
// // // document.querySelector('#content') - pass # or . with the id or class
// // // document.querySelectorAll('.enter_here') - returns a list: pass # or . with the id or class

// // var linkList = document.querySelectorAll('li.enter_here');
// // console.log(linkList);

// // // .setAttribute(attribute, value)
// // for(var i=0; i<linkList.length; i++)
// // {
// //   // linkList[i].setAttribute('href', 'www.google.com');
// //   linkList[i].appendChild("Hello");
// // }

// var node = document.createElement("LI"); // Create a <li> node
// var textnode = document.createTextNode("Water"); // Create a text node
// node.appendChild(textnode); // Append the text to <li>
// document.getElementById("content").appendChild(node);

var textnode = document.createTextNode('<h1>New item</h1>');

for (var i = 0; i < document.querySelectorAll('.enter_here').length; i++)
{
  document.querySelectorAll('.enter_here')[i].appendChild(textnode);
}

// function myFunction() {
//   $('#new_content').html("<h1>Hello</h1>").toggle();
// }

// $('#myButton').on("click", () => {
//   $('#new_content').html("<h1>Hello</h1>").toggle();
// });

$('#myButton').on("click", () => {
  $('#new_content').append("<li>List item</li>");
});