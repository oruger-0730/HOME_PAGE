// ページロード時に画面の向きを確認する
window.addEventListener("orientationchange", function() {
    if (window.orientation === 0 || window.orientation === 180) {
      alert("横向きにしてください！このままゲームを進めるとエラーが発生します。 error code **1-001**");
    }
  });
  
  // ログインページへの遷移
  function goToLogin() {
    window.location.href = "login.html";
  }
  
  // 新規登録ページへの遷移
  function goToNewAccount() {
    window.location.href = "newaccount.html";
  }
  