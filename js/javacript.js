function register() {
    var id = document.getElementById("id").value;
    var pass = document.getElementById("pass").value;
    var pass1 = document.getElementById("pass1").value;
    var sdt = document.getElementById("sdt").value;
    var gmail = document.getElementById("gmail").value;

    if (pass != pass1) {
        alert("Mật khẩu không trùng khớp");
        return;
    }
    if (id & pass & pass1 & sdt & gmail) {
        var user = {
            id: id,
            pass: pass,
            sdt: sdt,
            gmail: gmail,
        };
        check = localStorage.setItem('Users', JSON.stringify(user));
        alert("Đăng ký thành công");
    } else {
        alert("nhập chưa đủ thông tin")
    }
}


function login() {
    var username = document.getElementById("id-login").value;
    var password = document.getElementById("pass-login").value;

    var data = JSON.parse(localStorage.getItem("Users"));

    if (username && password) {
        if (username == data.id && password == data.pass) {
            alert("Đăng nhập thành công");
            var name = {
                tendangnhap: username,
                matkhau: password,
            };
            savelogin = localStorage.setItem('name', JSON.stringify(name));
            return;
        } else {
            alert("Sai tài khoản hoặc mật khẩu");
        }
    }
}
var account = localStorage.getItem('name');
let idaccount = JSON.parse(account);
if (account) {
    document.querySelector('.dangnhap-header').innerHTML = `
    <div class="idaccount">
    <h1>${idaccount.tendangnhap}</h1>
    <div class="dangxuat-account" onclick="dangxuat()"><i class="fas fa-sign-out-alt"></i></div>
    </div>
    <a href="thongtin.html">Thông tin cá nhân</a>
    <a href="don.html">Đơn</a>
    `
} else {
    document.querySelector('.dangnhap-header').innerHTML = `
    <a href="login.html">Đăng nhập</a>
    <a href="register.html">Đăng ký</a>
    `
}

function dangxuat() {
    let a = localStorage.removeItem('name')
    let b = localStorage.removeItem('productsInCart')
    let c = localStorage.removeItem('totalCost')
    let d = localStorage.removeItem('cartNumbers')
    if (localStorage.getItem('name') == null) {
        document.querySelector('.dangnhap-header').innerHTML = `
        <a href="login.html">Đăng nhập</a>
        <a href="register.html">Đăng ký</a>
        `
    }
}

function showthongtinnguoidung() {
    let nguoidung = localStorage.getItem('Users');
    nguoidung = JSON.parse(nguoidung);
    document.querySelector('.thongtinnguoidung').innerHTML = `
    <div class="tk-nguoidung">Tên đăng nhập:${nguoidung.id}</div>
    <div class="mk-nguoidung">Mật khẩu:${nguoidung.pass} </div>
    <div class="sdt-nguoidung">Số điện thoại:${nguoidung.sdt} </div>
    <div class="gmail-nguoidung">Gmail:${nguoidung.gmail} </div>
    `
}