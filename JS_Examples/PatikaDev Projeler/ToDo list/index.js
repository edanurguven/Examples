let listItems=['3 Litre Su İç','Ödevleri Yap','En Az 3 Saat Kodlama Yap','Yemek Yap','50 Sayfa Kitap Oku']
localStorage.setItem('list', JSON.stringify(listItems));

const getItems = () =>{
    let todoList = document.getElementById('list')
    todoList.innerHTML = ''
    let list =  JSON.parse(localStorage.getItem('list'))
    list.forEach(function(entity){
        console.log('item =>'+ entity)
        let item = document.createElement('li')
        item.className='li'
        item.innerHTML = entity

        let closeButton = document.createElement('button');
        closeButton.innerHTML = 'x';
        closeButton.className = 'closeButton btn'

        closeButton.addEventListener('click', function () {
            item.remove();
            list = list.filter(itemText => itemText !== entity);
            localStorage.setItem('list', JSON.stringify(list));
        });
        
        closeButton.style.backgroundColor = getComputedStyle(item).getPropertyValue('background-color');
        item.appendChild(closeButton)

        item.addEventListener('click', function() {
            
        });

        item.addEventListener('click', function() {
            if(item.className==='li'){
                item.className = 'checked'
            }else{
                item.className ='li'
            }
        });

        todoList.appendChild(item)
    })
}

function showToast(type, message) {
    var toastClass = type === 'success' ? 'success' : 'error';
  
    // Toast elementini seçme
    var toast = document.querySelector('.toast.' + toastClass);
  
    // Toast içeriğini güncelleme
    toast.querySelector('.toast-body').innerText = message;
  
    // Toast'u gösterme
    $(toast).toast('show');

  }

const newElement=()=>{
    let task = document.getElementById('task')
    let text = task.value.trim();
    if(text !== '' && text.length !== 0){
        listItems.push(text)
        if(localStorage.getItem('list')){
            console.log("list var")
        }else{
            console.log("list yok")
        }
        localStorage.setItem('list',JSON.stringify(listItems))
        getItems()
        showToast('success', 'Listeye eklendi.');
    }else{
        showToast('error', 'Listeye boş ekleme yapamazsınız!');
    }
    
}

window.onload = function(){
    getItems()
}
