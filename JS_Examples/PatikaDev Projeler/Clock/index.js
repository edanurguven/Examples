var input = prompt('Kullanıcı Adınızı Giriniz');
let nameDOM = document.querySelector('#myName');
let clockDOM = document.querySelector('#myClock');

var name= 'isimsiz';
if(input !== ''){
    nameDOM.innerHTML = input;
}else{
    nameDOM.innerHTML = name;
}

setInterval(updateClock, 0); //saniyede bir güncelleyecek

function updateClock(){
let now = new Date();
let days = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

clockDOM.innerHTML= hours + ":" + minutes + ":" + seconds +"  "+choosenDay(days);

let day='';

function choosenDay(day){
    switch(day) {
        case 0:
          return 'Pazar';
        case 1:
          return 'Pazartesi';
        case 2:
            return 'Salı';
        case 3:
            return 'Çarşamba';
        case 4:
            return 'Perşembe';
        case 5:
            return 'Cuma';
        case 6:
            return 'Cumartesi';
        default:
          // code block
      }
}

}



