function logoutadmin() {
    if (localStorage.getItem('accountadmin')) {
        document.querySelector('.showidadmin').innerHTML = `
      <div style="margin-left:1155px; "><a onclick="clickclear()" href="admin.html">Đăng xuất</a></div>
      `
    }
}
logoutadmin();

function clickclear() {
    localStorage.removeItem('accountadmin');
}