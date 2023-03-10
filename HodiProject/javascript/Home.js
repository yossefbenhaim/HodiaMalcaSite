const nameAccount = document.getElementById('name-account');
const iconUser = document.getElementById('icon-user');

const checkAccount = () => {
  const lastLoginUserName = localStorage.getItem('user');
  const lastLoginText = lastLoginUserName
    ? ' 馃榿 ' + lastLoginUserName
    : '诇讛转讞讘专讜转';
  nameAccount.innerText = lastLoginText;
  document.getElementById('name-account').disabled = true;
};

window.onload = () => {
  checkAccount();
};

iconUser.addEventListener('click', () => {
  let text = '?讗转讛 专讜爪讛 诇讛转谞转拽';
  let checkUser = localStorage.getItem('user');
  if (checkUser) {
    if (confirm(text) == true) {
      localStorage.removeItem('user');
      lastLoginUserName = '诇讛转讞讘专讜转';
    } else {
      alert('馃榿讗转讛 注讚讬讬谉 专砖讜诐');
    }
  } else {
    window.location.href = 'https://yossefbenhaim.github.io/HodiaMalcaSite/HodiProject/html/Login.html';
  }
});
