// Navbar sticky on scroll
window.onscroll = function() {navSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

// Smooth scrolling
$(document).ready(function() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});

// Image gallery modal
var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("service-img");
var modalImg = document.getElementById("img01");

for (var i = 0; i < img.length; i++) {
	img[i].addEventListener("click", function() {
		modal.style.display = "block";
		modalImg.src = this.src;
	});
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
	modal.style.display = "none";
}

modal.onclick = function() {
	modal.style.display = "none";
}
