const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.recipetineats.com/wp-content/uploads/2020/02/Dan-Dan-Noodles_4-2.jpg?resize=650,910",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnContainerDOM = document.querySelector('.btn-container');
let sectionCenterDOM = document.querySelector('.section-center');

let categories = [] // kategoriler için boş bir array tanımlıyoruz.
menu.forEach((item) => {  // menu objesinin içindeki tüm kategorileri boş arraya atıyoruz.
  categories.push(item.category)
})


categories = categories.reduce((acc, item) => { // kategorileri reduce metoduyla yalnızca 1 kere yazdırıyoruz.
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, ['All'])

function showCategories(array) {  // showCategories fonksiyonuyla içine attığımız array elemanlarını bize button
  let allCategories = categories.map(item => {
    return `<button type="button" class="category-btn btn btn-outline-secondary m-2">${item}</button>`
  })
  btnContainerDOM.innerHTML = allCategories.join("");
}

showCategories(categories); // fonksiyonu çağırıyoruz ve buttonlar ekrana geliyor.
let categoryBtnDOM = document.querySelectorAll(".category-btn")

categoryBtnDOM.forEach(item => {  //aldığımız tüm butonlara forEach() ile click event veriyoruz.
  item.addEventListener('click',clickEvent);
})

function clickEvent(e){  
    let category = e.target.innerHTML; // category ismini alıyoruz
    let filterMenu = menu.filter((item) => { // menu objesini category'e göre filtreliyoruz.
      return item.category == category;
    })
    showMenu(filterMenu); // showMenu() fonskiyonu ile içine verdiğimiz objeyi HTML'e göre çeviriyor ve ekrana basıyor.
}

function showMenu(menuObj) { //içine verdiğimiz objeyi HTML dosyasına göre çeviren fonksiyon.
  if(menuObj == ""){ // eğer All ise yani öyle bir kategori yoksa tüm menüyü gösteriyor.
    menuObj = menu;
  }
  let filterObj = menuObj.map((item) => {  // fonksiyonunu içine attığımız menuObj isimli objeyi filterObj adında bir değişkene atıyoruz.
    return `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src=${item.img} alt=${item.title} class="photo"/>
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
      </div>
    </div>`
  })

  sectionCenterDOM.innerHTML = filterObj.join(""); // daha önceden aldığımız DOM objesinin innerHTML'ini değişiyoruz ve filterObj'yi joinliyoruz string şekilde yazdırıyoruz.
}

showMenu(menu); // ilk olarak tüm menüyü ekranda gösteriyoruz.














