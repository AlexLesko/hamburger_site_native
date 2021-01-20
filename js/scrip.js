function render(){
    return '' + `<div class="grid_item">
        <img src="img/black_burger.jpg" alt="black_burger">
        <div class="card_box_title">
            <div class="title">Black Burger</div>
            <div class="price">Price: 20$</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec tempor non tellus sed porttitor. Cras et augue a urna ultricies tempor vitae suscipit mauris.
        </p>
        <button>Order</button>
    </div>` + '';
}

function addMenu(){
    let listItem = document.getElementById("gridcontainer");
    listItem.innerHTML = render();
}

addMenu();
