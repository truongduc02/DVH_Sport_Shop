//create array item
let product1 = [{
        id: 49,
        img: "dung cu the thao/tham-360s-venus-2-lop-6mm-tim-6-300k.jpg",
        name: "Thảm Yoga Venus tím 2 lớp- 6mm",
        priceOld: 300000,
        priceNew: 300000,
        inCart: 0
    },
    {
        id: 50,
        img: "dung cu the thao/băng gối dán tập gym PAVO AV 432k.jpg",
        name: "Băng gối dán tập Gym Pavo AV",
        priceOld: 432000,
        priceNew: 432000,
        inCart: 0
    },
    {
        id: 51,
        img: "dung cu the thao/Bong tap Yoga Aerobic Brosman Gymball 399k.jpg",
        name: "Bóng tập Yoga Aerobic Brosman",
        priceOld: 399000,
        priceNew: 399000,
        inCart: 0
    },
    {
        id: 52,
        img: "hinh/xe-dap-tap-the-duc-spin-bike-mk207.jpg",
        name: "Xe đạp tập thể dục spin- bike MK207",
        priceOld: 3490000,
        priceNew: 3490000,
        inCart: 0
    },
    {
        id: 53,
        img: "https://cuonggym.com/wp-content/uploads/2019/03/ta-tay-Jordan-nhap-khau.jpg",
        name: "Tạ tay Jordan nhập khẩu",
        priceOld: 100000,
        priceNew: 100000,
        inCart: 0
    },
    {
        id: 54,
        img: "hinh/kem-tap-the-luc-reebok-rawt-11035cy1.jpg",
        name: "Kèm tập thể lực Reebok-Rawt",
        priceOld: 237000,
        priceNew: 237000,
        inCart: 0
    },
    {
        id: 55,
        img: "https://product.hstatic.net/1000379968/product/thiet-ke-khung-ganh-ta-k8_6995fdcc45d14a6cb667a4102806490b.jpg",
        name: "Giàn tập tạ đa năng Thiên trường K8",
        priceOld: 13690000,
        priceNew: 13690000,
        inCart: 0
    },
    {
        id: 56,
        img: "https://www.thethaodaiviet.vn/images/upload/Image/ghe-tap-ta-dv-606-1602467427607.jpg",
        name: "Ghế tập tạ đa năng DV 606",
        priceOld: 1150000,
        priceNew: 1150000,
        inCart: 0
    },
    {
        id: 57,
        img: "https://salt.tikicdn.com/ts/tmp/37/20/c5/4e1beeca541ed551bdbb0d14857c14ea.jpg",
        name: "Quả bóng đá cup C1 2020",
        priceOld: 260000,
        priceNew: 260000,
        inCart: 0
    },
    {
        id: 10,
        img: "https://luongsport.com/wp-content/uploads/2018/01/92547838_1127246840953336_3850077463740678144_n.jpg",
        name: "Vợt cầu lông Victor TK-999",
        priceOld: 1400000,
        priceNew: 1400000,
        inCart: 0
    },
    {
        id: 58,
        img: "https://www.sport9.vn/images/thumbs/boc/boc-ong-dong-adidas-x-youth-shin-guard_750_20001679_.jpeg",
        name: "Bọc ống đồng Adidas X Youth",
        priceOld: 600000,
        priceNew: 600000,
        inCart: 0
    },
    {
        id: 59,
        img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/348/336/products/31-0.jpg?v=1628941304530",
        name: "Bóng chuyền da Động lực DL 200",
        priceOld: 140000,
        priceNew: 140000,
        inCart: 0
    },
    {
        id: 60,
        img: "http://tikicdn.com/media/catalog/product/i/m/img_3057.jpg",
        name: "Bộ ống cầu lông",
        priceOld: 125000,
        priceNew: 125000,
        inCart: 0
    },
    {
        id: 61,
        img: "https://product.hstatic.net/1000362402/product/abqe346-1-2_5e1f81653ced426989ee3835ca325d5d_cc337c2bfa654abaa72d0dd603affa51_master.jpg",
        name: "Quả bóng rổ Li - Ning ABEQ346",
        priceOld: 580000,
        priceNew: 580000,
        inCart: 0
    },
    {
        id: 62,
        img: "https://chiemtaimobile.vn/images/detailed/26/vot-bong-ban-and1__5_.jpg",
        name: "Vợt bóng bàn AND1YD606GP2",
        priceOld: 350000,
        priceNew: 350000,
        inCart: 0
    },
    {
        id: 63,
        img: "https://www.thethaothientruong.vn/uploads/contents/ban-bong-ban-vinasport-mdf-25-ly.jpg",
        name: "Bàn bóng bàn VinaSport MDF",
        priceOld: 3650000,
        priceNew: 3650000,
        inCart: 0
    }
]

var productList = [];

function Reset() {
    localStorage.setItem("Product", JSON.stringify(product1));
}

function loading() {
    if (localStorage.getItem('Product')) {
        let loading = localStorage.setItem('ProductLoad', localStorage.getItem('Product'));
        localStorage.removeItem('Product');
    }
}

function add() {
    var id = document.getElementById("id").value;
    var img = document.getElementById("imagefile").value;
    var name = document.getElementById("name").value;
    var priceOld = document.getElementById("priceOld").value;
    var priceNew = document.getElementById("priceNew").value;

    var product = {
        id: id,
        img: img,
        name: name,
        priceOld: priceOld,
        priceNew: priceNew,
    };
    if (id == "") {
        alert("Hãy nhập id");
        return;
    }

    if (localStorage.getItem("ProductLoad") == null) {
        localStorage.setItem("ProductLoad", "[]");
    }
    var olddata = JSON.parse(localStorage.getItem("ProductLoad"));
    olddata.push(product);

    localStorage.setItem("ProductLoad", JSON.stringify(olddata));
    show();
    clear();
}

function clear() {
    document.getElementById("id").value = "";
    document.getElementById("imagefile").value = "";
    document.getElementById("name").value = "";
    document.getElementById("priceOld").value = "";
    document.getElementById("priceNew").value = "";
}

//===========================================
function show() {
    var list = JSON.parse(localStorage.getItem("ProductLoad"));
    var table =
        "<thead><tr><th>Id</th><th>Ảnh</th><th>Tên sản phẩm</th><th>Giá cũ</th><th>Giá mới</th><th>Action</th></tr></thead><tbody >";
    for (var i = 0; i < list.length; i++) {
        table += "<tr>";
        table += "<th>" + list[i].id + "</th>";
        table += "<th><img src= " + list[i].img + " width ='100' height='100'></th>";
        table += "<th>" + list[i].name + "</th>";
        table += "<th>" + list[i].priceOld + "</th>";
        table += "<th>" + list[i].priceNew + "</td>";
        table +=
            '<th><button onclick="Delete(' +
            list[i].id +
            ');">Xóa</button><button onclick="edit(' +
            list[i].id +
            ')">Sửa</button></th>';
        table += "</tr>";
    }
    table += "</tbody>";
    document.getElementById("database").innerHTML = table;
}

function Delete(id) {
    var choise = confirm("Bạn có chắc chắn muốn xóa ?");
    if (choise == 1) {
        var list = JSON.parse(localStorage.getItem("ProductLoad"));
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                list.splice(i, 1);
                localStorage.setItem("ProductLoad", JSON.stringify(list));
                show();
            }
        }
        alert("Bạn đã xóa thành công");
    } else return;
}

function edit(x) {
    var list = JSON.parse(localStorage.getItem("ProductLoad"));
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == x) {
            document.getElementById("id").value = list[i].id;
            document.getElementById("output").value = list[i].img;
            document.getElementById("name").value = list[i].name;
            document.getElementById("priceOld").value = list[i].priceOld;
            document.getElementById("priceNew").value = list[i].priceNew;
            var but = '<button id="edit" onclick="change(' + list[i].id + ');">Sửa</button>';
        }
    }
    document.getElementById("save").style.display = "none";
    document.getElementById("loca").innerHTML = but;
}

function change(x) {
    var choise = confirm("Bạn có chắc chắn muốn sửa thông tin ?");
    if (choise == 1) {
        var list = JSON.parse(localStorage.getItem("ProductLoad"));
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == x) {
                list[i].id = document.getElementById("id").value;
                list[i].img = document.getElementById("output").value;
                list[i].name = document.getElementById("name").value;
                list[i].priceOld = document.getElementById("priceOld").value;
                list[i].priceNew = document.getElementById("priceNew").value;
                localStorage.setItem("ProductLoad", JSON.stringify(list));
                show();
                clear();
                var but = '<button id="save" onclick="add();">Thêm</button>';
            }
        }
        document.getElementById("edit").style.display = "none";
        document.getElementById("loca").innerHTML = but;
        alert("Bạn đã sửa thành công");
    } else return;
}

function Itemcurrent(arr) {
    if (localStorage.getItem('ProductLoad')) {
        document.querySelector('.classcurrent').classList.add('active');
    } else {
        const renderProduct = arr.map(obj => {
            return ` <div class="product">
            <div class="product_img">
                <h1>
                    <a href="#"><img src="${obj.img}" class="product-image"></a>
                </h1>
                <div class="product_info">
                    <span>Xem chi tiết</span>
                </div>
            </div>
            <h3 class="product-name">${obj.name}</h3>
            <div class="product-price">
                <span class="price">
                   ${obj.priceNew}VNĐ
               </span>
            </div>
            <h2><button class="addcartSearch">Thêm vào giỏ</button></h2>
        </div>
    `
        })
        document.querySelector('.classcurrent').innerHTML = renderProduct.join('')
    }
};
//show sp dung cu the thao  ra
function chayItem() {
    Itemcurrent(product1);
}

function showItem() {
    Item = localStorage.getItem('ProductLoad');
    Item = JSON.parse(Item);
    for (let i = 0; i < Item.length; i++) {
        document.querySelector('.classnew').innerHTML += `
      <div class="product">
                <div class="product_img">
                    <h1>
                        <a href="#"><img src="` + Item[i].img + `" class="product-image"></a>
                    </h1>
                    <div class="product_info">
                        <span>Xem chi tiết</span>
                    </div>
                </div>
                <h3 class="product-name">` + Item[i].name + `</h3>
                <div class="product-price">
                    <span class="price">` +
            Item[i].priceNew +
            `</span>
                </div>
                <h2><button class="addcart cart100">Thêm vào giỏ</button></h2>
            </div>
      `
    }
}
if (document.querySelector('.classItem')) {
    showItem();
}