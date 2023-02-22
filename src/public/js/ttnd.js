
$('td').each(function (element, index) {
    $(this).blur(function (params) {

        var id = $(this).data('id')
        var value = $(this).text()
    })
})

function edit(text,columname) {
    $.ajax({
        url: 'homecontroller.js',
        type: 'post',
        data: {
            id: $('#id').val(),
            surname: text
            
        },
    
        success: (function (data) {
            console.log(data)
    
    
        }),
       
    
    })
}

$(document).on('blur','.name1', function(){
    var text = $(this).text().trim()
    edit(text,'surname')
})
$(document).on('blur','.name2', function(){
    var text = $(this).text().trim()
    edit("",'surname')
})


var avatar = document.querySelector('#img')
var list = document.querySelector('.img-title')
avatar.onclick = function(){
 list.classList.toggle('hidden')
 avatar.style.animation = 'avatar 0.2s linear'
 setTimeout(function(){

     avatar.style.animation = ''
 },50)
}
function upload() {
    
    var upload = document.getElementById('up').files;
    console.log(upload);
    if(upload.length > 0){
        var list = document.querySelector('.img-title')
       var  fileToLoad = upload[0]
       var filerender = new FileReader()
       filerender.onload = function(file){
        var src = file.target.result;
        var img = document.getElementById('img')
        img.src = src
        list.classList.add('hidden')
       }
       filerender.readAsDataURL(fileToLoad)
       var btn = document.getElementById('btn')
       var button = document.createElement('button')
       button.getAttribute('type','submit')
       button.innerHTML = 'Cập Nhật'
       btn.appendChild(button)
    }
}

const images = document.querySelector('.img img')
const show= document.querySelector('.show')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery-inner img')
const close = document.querySelector(' .close')

show.onclick = function(){
    gallery.classList.add('show')
	galleryImg.src = images.src
}
close.addEventListener('click', () => {
	gallery.classList.remove('show')
})

// esc click
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 27) gallery.classList.remove('show')
})



