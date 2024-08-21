// //Reference from W3Schools
// // Get the button:
// let onTopButton = document.getElementById("topBtn");

// // When the user scrolls down 100px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     onTopButton.style.display = "block";
//   } else {
//     onTopButton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

window.onscroll = function() { adjustTopButton() };

function adjustTopButton() {
  var topBtn = document.getElementById("topBtn");
  var footer = document.querySelector("footer"); // Adjust this selector to match your footer
  
  var footerRect = footer.getBoundingClientRect();
  var btnRect = topBtn.getBoundingClientRect();

  if (window.innerHeight - btnRect.bottom < footerRect.height) {
    topBtn.style.bottom = footerRect.height + 35 + "px";
  } else {
    topBtn.style.bottom = "20px";
  }
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

document.getElementById('topBtn').onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};