// // 1. Create XHRHttpRequest Object
// var xhr = new XMLHttpRequest();

// // 2. Define a callback function
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       $('#insert_navbar_here').html(xhr.responseText)
//       // console.log(xhr.responseText)
//     } else {
//       alert(`${xhr.status} ${xhr.statusText}`);
//     }
//   }
// };

// // 3. Open a request - prepare browser for a sending a request
// xhr.open("GET", "./asdfhjkl.html");

// // 4. Send the request
// // xhr.send();

// $('#showNavbar').on("click", () => {
//   xhr.send()
//   $('#showNavbar').css("display", "none");
// });

$('#showNavbar').on("click", () => {
  $('#insert_navbar_here').load("./navbar.html");
  $('#insert_navbar_here').toggle();
});