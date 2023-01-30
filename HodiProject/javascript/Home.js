const nameAccount = document.getElementById('name-account');
const iconUser = document.getElementById('icon-user');

const checkAccount = () => {
  const lastLoginUserName = localStorage.getItem('user');
  const lastLoginText = lastLoginUserName
    ? ' 😁 ' + lastLoginUserName
    : 'להתחברות';
  nameAccount.innerText = lastLoginText;
  document.getElementById('name-account').disabled = true;
};

window.onload = () => {
  checkAccount();
};

iconUser.addEventListener('click', () => {
  let text = '?אתה רוצה להתנתק';
  let checkUser = localStorage.getItem('user');
  if (checkUser) {
    if (confirm(text) == true) {
      localStorage.removeItem('user');
      lastLoginUserName = 'להתחברות';
    } else {
      alert('😁אתה עדיין רשום');
    }
  } else {
    window.location.href = '/HodiaMalcaSite/HodiProject/html/Login.html';
  }
});
