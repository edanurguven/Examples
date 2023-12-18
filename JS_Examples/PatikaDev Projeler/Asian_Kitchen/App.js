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
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
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

const categoryButtonDOM = document.querySelector('#categoryButton')
const categoryMeatDOM = document.querySelector('#categoryMeat')
const allCategoriesDOM = document.querySelector('#allCategories')

let category=[]
let meat=[]

const getCategory =()=>{
  menu.filter(function (entry){
    category.push(entry.category)
 })
 category = [...new Set(category)]
}

const getCategoryMeat=(name)=>{
 menu.filter(function(entry){
    if(entry.category === name){
      meat.push(entry)
    }
 })
}

const getMeats = (clickedButtonName) =>{
  if(clickedButtonName === '' ){
      menu.forEach(function(item){
        meat.push(item)
      })
  }
  else{
    getCategoryMeat(clickedButtonName)
  }
  console.log('Tıklanan butonun name özelliği:', clickedButtonName);
  
  var meats = document.getElementById('meats')
  meats.innerHTML = '';

  meat.forEach(function(item){
    var mainCard = document.createElement('div')
    mainCard.className = 'col-6 row'

    var section1 = document.createElement('div')
    section1.className = 'img col-4 mb-3'

    var img = document.createElement('img')
    img.className='image'
    img.src= item.img
    section1.appendChild(img)

    var section2 = document.createElement('div')
    section2.className = 'text col-8 mb-3 '


    var title = document.createElement('div')
    title.className = 'row justify-content-between'

    var titleH = document.createElement('h4')
    titleH.innerHTML=item.title
    titleH.className = 'mytitle col-8' 
    title.appendChild(titleH)

    var titleP = document.createElement('h4')
    titleP.innerHTML=item.price
    titleP.className = 'mytitle col-4' 
    title.appendChild(titleP)

    section2.appendChild(title) 

    var br = document.createElement('hr')
    br.className = 'hrStyle'
    section2.appendChild(br)

    var text=document.createElement('p')
    text.textContent = item.desc
    section2.appendChild(text)
    
    mainCard.appendChild(section1)
    mainCard.appendChild(section2)

    meats.appendChild(mainCard)
  })
}

const getButton = () =>{
  getCategory();
  clearMeats();
  var buttons = document.getElementById('buttons')
  category.forEach(function(item){
    var button = document.createElement('button')
    button.textContent = item
    button.className = 'btn btn-outline-dark button'
    button.name = item
    buttons.appendChild(button)

    //butona tıklama olayını dinleme
    button.addEventListener('click',function(){
      var clickedButtonName = button.name
      clearMeats();
      getMeats(clickedButtonName)
    })
  })
}

const handleButtonClick = () =>{
  getMeats('')
}

// Sayfa yüklendiğinde çalışacak fonksiyon
function onPageLoad() {
  clearMeats();
  getButton(); 
}

// Önceki içeriği temizleme fonksiyonu
function clearMeats() {
  var meatsContainer = document.getElementById('meats');

  if (meatsContainer) {
      meatsContainer.innerHTML = '';
  }
  meat.length=0
}

window.onload = onPageLoad;

