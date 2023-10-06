const shareBtn = document.getElementById('shareBtn');
const shareActive = document.getElementById('active');
const shareBtn2 = document.getElementById('shareBtn2');

shareBtn.addEventListener('click', () =>{
    shareActive.classList.toggle('shareActive');
});

shareBtn2.addEventListener('click', () =>{
    shareActive.classList.toggle('shareActive');
});