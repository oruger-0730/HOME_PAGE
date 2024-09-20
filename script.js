// ログインボタンを押すと login.html に移動
document.getElementById('login-button').addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  
  // 新規登録ボタンを押すと newaccount.html に移動
  document.getElementById('register-button').addEventListener('click', () => {
    window.location.href = 'newaccount.html';
  });
  
  // JavaScriptでスクロール無効化
  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });