function addComment() {
    // Get the comment text from the textarea
    var commentText = document.getElementById('comment-text').value.trim();
  
    // Check if the comment is not empty
    if(commentText !== "") {
      // Create a div element for the comment
      var commentDiv = document.createElement('div');
      commentDiv.classList.add('comment'); // Assuming you have CSS for .comment
      commentDiv.textContent = commentText;
  
      // Add the comment div to the comments container
      document.getElementById('comments-container').appendChild(commentDiv);
  
      // Clear the textarea
      document.getElementById('comment-text').value = "";
    } else {
      alert('Please enter a comment before posting!');
    }
  }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0 || dots.length === 0) {
    return;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}