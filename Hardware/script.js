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

  