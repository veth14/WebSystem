document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})


document.querySelectorAll('.navbar-link-scroll').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the link

        const targetElement = document.querySelector(this.getAttribute('href')); // Get the target element based on the href attribute
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element with smooth animation
    });
});


document.getElementById('back').addEventListener('click', function() {
	
	window.location.href = '/FinalFiles/index.html';
});

document.getElementById('home').addEventListener('click', function() {
	window.location.href = '/home/index.html';
});

document.getElementById('contact').addEventListener('click', function() {
	window.location.href = '/Evolution/index.html#contact';
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


