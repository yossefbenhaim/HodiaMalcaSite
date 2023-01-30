const user = document.getElementById('user-name');
const password = document.getElementById('password');
const male = document.getElementById('male');
const female = document.getElementById('female');
const notSet = document.getElementById('notSet');
const mail = document.getElementById('mail');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  if (user.value !== '' && password.value !== '' && mail.value !== '') {
    if (male.value !== '' || female.value !== '' || notSet.value !== '') {
      localStorage.setItem('user', user.value);
      localStorage.setItem('password', password.value);

      alert('create successful');
      window.location.href = '/HodiaMalcaSite/HodiProject/html/Home.html';
    }
  } else {
    alert('לא הכנסת שום ערך בבקשה למלא הכול!!');
  }
});
