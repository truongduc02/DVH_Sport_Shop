const admin = {
    idadmin: 'nhomhvd',
    passadmin: 'asd',

};

function loginadmin() {
    var username = document.getElementById("id-loginadmin").value;
    var password = document.getElementById("pass-loginadmin").value;

    if (username && password) {
        if (username == admin.idadmin && password == admin.passadmin) {
            alert("Đăng nhập thành công");
            savelogin = localStorage.setItem('accountadmin', JSON.stringify(admin));
            return;
        } else {
            alert("Sai tài khoản hoặc mật khẩu");
        }
    }
}

function checkadmin() {
    if (localStorage.getItem('accountadmin')) {
        document.querySelector('.adminlogin').innerHTML = `
        <h1><a href="quanlydonhang.html">Vào trang admin</a></h1>
        `
    }
}
if (document.querySelector('.trangadmin')) {
    checkadmin();
}