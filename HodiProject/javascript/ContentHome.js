const sliderImages = document.getElementById('myModal');

function openModal() {
  sliderImages.style.display = 'block';
}

function closeModal() {
  sliderImages.style.display = 'none';
}

var slideIndex = 1;

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  console.log(slides.length, n);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

const nameAccount = document.getElementById('name-account');

const checkAccount = () => {
  const lastLoginUserName = localStorage.getItem('user');
  const lastLoginText = lastLoginUserName
    ? ' 😁 ' + lastLoginUserName
    : 'להתחברות';
  nameAccount.innerText = lastLoginText;
};

window.onload = () => {
  checkAccount();
};
