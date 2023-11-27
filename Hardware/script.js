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

let preveiwContainer = document.querySelector('.popup');
let previewBox = preveiwContainer.querySelectorAll('.contents');

document.querySelectorAll('.gallery .gallerylink').forEach(gallerylink =>{
  gallerylink.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = gallerylink.getAttribute('data-name');
    previewBox.forEach(contents =>{
      let target = contents.getAttribute('data-target');
      if(name == target){
        contents.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


