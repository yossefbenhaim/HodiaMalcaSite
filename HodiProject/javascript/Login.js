const user = document.getElementById('user-name');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  let userE = localStorage.getItem('user');
  let passwordE = localStorage.getItem('password');
  if (userE == user.innerText && passwordE == password.innerText) {
    alert('login successful');
    window.location.href = '/HodiaMalcaSite/HodiProject/html/Home.html';
  } else {
    alert('!!לא הכנסת ערכים נכונים');
  }
});
