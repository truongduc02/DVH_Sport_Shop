function showuser() {
    var data = JSON.parse(localStorage.getItem("Users"));
    var table =
        '<tbody><tr><th>' +
        data.id +
        '</th><th>' +
        data.pass +
        '</th><th>' +
        data.sdt +
        '</th><th>' +
        data.sdt +
        '</th></tr></th><th><button onclick="xoaaccount()">delete</button></th><th></tbody>';
    document.getElementById("database1").innerHTML = table;
}

function xoaaccount() {
    localStorage.removeItem('Users');
    localStorage.removeItem('name');
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('cartProduct');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');
}

function displayCart() {
    let nameCart = localStorage.getItem('name');
    nameCart = JSON.parse(nameCart);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.cartProduct');
    console.log(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    document.querySelector('.chenten').innerHTML = `<h1>` + nameCart.tendangnhap + `</h1>`;
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
      <div class="cartHeader">
          <div class="titleCart1"> 
                 <img src="${item.img}" class="product-image">
                 <h3 class="cartname">${item.name}</h3>
          </div>
         
          <div class="priceCart">
          <span class="price">
             ${item.priceNew}VNĐ
         </span>
          </div>
          <div class="quatityCart">${item.inCart}</div>
          <div class="totalCart">${item.inCart*item.priceNew} VNĐ</div>
           </div>
           `
        });
        productContainer.innerHTML += `
      <div class="baskettotal"><span>Tổng cộng: ${cartCost} VNĐ</span></div>
      `
    }
}
if (localStorage.getItem('productsInCart')) {
    displayCart();
}

function xacnhandon() {
    alert("Đơn đã được xác nhận");
    let a = localStorage.getItem('productsInCart');
    let b = localStorage.getItem('totalCost');
    a = JSON.parse(a);
    b = JSON.parse(b);
    localStorage.setItem('don', JSON.stringify(a));
    localStorage.setItem('don1', JSON.stringify(b));
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');
}

function displayCart1() {
    let cartItems = localStorage.getItem('don');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.cartProductasd');
    console.log(cartItems);
    let cartCost = localStorage.getItem('don1');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="cartHeader">
            <div class="titleCart1"> 
            
                   <img src="${item.img}" class="product-image">
            </div>
            <h3 class="cartname">${item.name}</h3>
            <div class="priceCart">
            <span class="price">
               ${item.priceNew}VNĐ
           </span>
            </div>
            <div class="quatityCart"><span class="lessCart"></span>${item.inCart}</div>
            <div class="totalCart">${item.inCart*item.priceNew} VNĐ</div>
             </div>
             `
        });
        productContainer.innerHTML += `
        <div class="baskettotal"><span>Tổng cộng: ${cartCost} VNĐ</span></div>
        `
    }
    alert("Đơn đã xác nhận , mời bạn xem lại hóa đơn");
}