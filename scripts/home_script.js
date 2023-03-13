// Image Slide Function
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 3 seconds
  }



// News Letter Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  // AJAX Request

  function loadContent(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById("content").innerHTML = xhr.responseText;
        } else {
          console.log("Error loading content.");
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  // Audio Player
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = 'Play';
  } else {
    audio.play();
    playPauseButton.textContent = 'Pause';
  }
  
  isPlaying = !isPlaying;
});


// Pop-up box:

function showPopUp() {
  // Get the pop-up box element
  var popUpBox = document.getElementById("pop-up-box");
  
  // Show the pop-up box
  popUpBox.style.display = "block";
}

function hidePopUp() {
  // Get the pop-up box element
  var popUpBox = document.getElementById("pop-up-box");
  
  // Hide the pop-up box
  popUpBox.style.display = "none";
}