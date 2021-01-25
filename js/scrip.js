function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            resolve(e.target.response);
        };
        oReq.open('GET', 'datas.json', true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

function render(datas) {
    return '' + datas.map(function (item) {
        return `<div class="grid_item">
    <img src=${item.img} alt=${item.alt}>
    <div class="card_box_title">
        <div class="title">${item.title}</div>
        <div class="price">Price: ${item.price}</div>
    </div>
    <p class="desc">${item.description}</p>
    <button data-order="${item.selection}">Order</button>
    </div>`}).join('') + '';
}

function showBestBurger(datas) {
    return '' + datas.map(function (item) {
        if (item.topBurger == "true") {
            return `<div class="grid_item">
    <img src=${item.img} alt=${item.alt}>
    <div class="card_box_title">
        <div class="title">${item.title}</div>
        <div class="price">Price: ${item.price}</div>
    </div>
    <p>${item.description}</p>
    </div>`}
    }).join('') + '';
}

function addMenu() {
    let listItem = document.getElementById("gridcontainer");
    listItem.innerHTML = render(data.listItems);
}

function addTopBurger() {
    let topBurger = document.getElementById("topBurger");
    topBurger.innerHTML = showBestBurger(data.listItems);
}

var data = {
    listItems: []
};

getSessions()
    .then((datas) => {
        console.log('promises!')
        data.listItems = datas;
        addMenu();
    });
getSessions()
    .then((datas) => {
        console.log('promises!')
        data.listItems = datas;
        addTopBurger();
    });

setTimeout(function () {

    const orderButton = document.querySelectorAll("button[data-order]");
    console.log(orderButton);

    orderButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            const button = e.currentTarget;
            const container = button.parentNode;
            console.log("test")
            const order = {
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
                
            };

            localStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("menu.html", "order.html");
            window.location.href = url;

        })
    })

}, 1000);




