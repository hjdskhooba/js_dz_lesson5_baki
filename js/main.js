let base = [
    {id: 1, img: "./img/image 1.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 2, img: "./img/image 2.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 3, img: "./img/image 3.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 4, img: "./img/image 4.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 5, img: "./img/image 5.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 6, img: "./img/image 6.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 7, img: "./img/image 7.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
    {id: 8, img: "./img/image 8.png", title: "Syltherine", subtitle: "Stylish cafe chair"},
];
let row = document.querySelector('.row');

const addCartsInRow = () => {
    base.forEach((item) =>
    row.innerHTML +=
    `<div class="card" id ="${item.id}">
    <img class ="card_img" src="./${item.img}" alt="${item.subtitle}">
    <h2 class="card_title">${item.title}</h2>
    <p class="card_subtitle">${item.subtitle}</p>
    <price>Rp 2.500.000</price>
    <button class="del_btn">Delete</button>
    </div>` 
)
}
addCartsInRow();

const del = document.querySelectorAll('.del_btn');

function removeFun(e) {
    const remove = e.currentTarget;
    remove.parentElement.remove();
}

del.forEach((del) => del.addEventListener('click', removeFun));
