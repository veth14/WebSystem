document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
	i++
	const icon = document.querySelector('.section-1-icons .change')
	icon.classList.remove('change')

	if (i > icons.length) {
		icons[0].classList.add('change')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change')
	}
}, 4000)

document.querySelectorAll('.navbar-link-scroll').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the link

        const targetElement = document.querySelector(this.getAttribute('href')); // Get the target element based on the href attribute
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element with smooth animation
    });
});

document.getElementById('contact').addEventListener('click', function() {
	
	window.location.href = '/Evolution/index.html#contact';
});
document.getElementById('home').addEventListener('click', function() {
	
	window.location.href = '/home/index.html';
});

document.getElementById('IObutton').addEventListener('click', function() {
	
	window.location.href = '/IOD/index.html';
});

document.getElementById('hardwarebutton').addEventListener('click', function() {
	window.location.href = '/Hardware/index.html';
});

document.getElementById('softwarebutton').addEventListener('click', function() {
	window.location.href = '/Software/index.html';
});

document.getElementById('toolsbutton').addEventListener('click', function() {
	window.location.href = '/Tools/index.html';
});

function myFunction() {
	var blur=document.getElementById('blur');
	blur.classList.toggle('active');
	var content = document.getElementById('content');
	content.classList.toggle('active');
   }
   
   function togglePopup(){
		document.getElementById("content").classList.toggle('active');
		document.getElementById('blur').classList.toggle('active');
	}






  