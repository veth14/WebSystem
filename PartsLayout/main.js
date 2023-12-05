const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

document.getElementById('hardware').addEventListener('click',function(){
  window.location.href = '/Hardware/index.html'
})

document.getElementById('software').addEventListener('click',function(){
  window.location.href = '/Software/index.html'
})

document.getElementById('input').addEventListener('click',function(){
  window.location.href = '/IOD/index.html'
})

document.getElementById('output').addEventListener('click',function(){
  window.location.href = '/IOD/index.html'
})

document.getElementById('tools').addEventListener('click',function(){
  window.location.href = '/Tools/index.html'
})