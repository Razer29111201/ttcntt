


var avatar = document.querySelector('#img')
var list = document.querySelector('.img-title')
avatar.onclick = function () {
    list.classList.toggle('hidden')
    avatar.style.animation = 'avatar 0.2s linear'
    setTimeout(function () {

        avatar.style.animation = ''
    }, 50)
}
function upload() {

    var upload = document.getElementById('up').files;
    console.log(upload);
    if (upload.length > 0) {
        var list = document.querySelector('.img-title')
        var fileToLoad = upload[0]
        var filerender = new FileReader()
        filerender.onload = function (file) {
            var src = file.target.result;
            var img = document.getElementById('img')
            img.src = src
            list.classList.add('hidden')
        }
        filerender.readAsDataURL(fileToLoad)
        var btn = document.getElementById('btn')
        var button = document.createElement('button')
        button.getAttribute('type', 'submit')
        button.innerHTML = 'Cập Nhật'
        btn.appendChild(button)
    }
}

const images = document.querySelector('.img img')
const show = document.querySelector('.show')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery-inner img')
const close = document.querySelector(' .close')

show.onclick = function () {
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


$.ajax({
    url: '/login/logindia',
    type: 'get',

    success: (function (data) {
        console.log(data);
        if (data.acc.img) {
            $('#logo-user').html(`<img src="/${data.acc.img}" alt="">`)
        } else {
            $('#logo-user').html(`<i class='bx bxs-user-circle'></i>`)
        }
        if (data.token) {
            var Admin = 'Admin'
            $(".header-user-success").removeClass('hiden')
            $('.header-user').addClass('hiden')
            $("#usersuccess").html(data.acc.user);
            $('#logout').click(function () {
                document.cookie = document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";;
            })
            if (data.acc.role == 1) {
                $('#admin').html('Admin')


            } else {
                console.log($('#admin-icon'));
                $('#admin-icon').attr("style", "display:none;")
            }
        } else {
            console.log('a');

        }


    }),
    error: function (e) {
        window.location.href = '/login'
    }


}).then(data => {
    setCookie('token', data.token, 1)
    console.log('thành công', data);

})
    .catch(error => {
        console.log('sai roi');
    })



function time() {

    var today = new Date()
    var crrday = today.getDay()
    var second = today.getSeconds()
    var minutes = today.getMinutes()
    var hour = today.getHours()
    var date = today.getDate()
    var dayname = '';
    if (second < 10) {
        second = '0' + second;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    switch (crrday) {
        case 0:
            dayname = "Chủ nhật";
            break;
        case 1:
            dayname = "Thứ hai";
            break;
        case 2:
            dayname = "Thứ ba";
            break;
        case 3:
            dayname = "Thứ tư";
            break;
        case 4:
            dayname = "Thứ năm";
            break;
        case 5:
            dayname = "Thứ sau";
            break;
        case 6:
            dayname = "Thứ bảy";
    }

    var time = dayname + ', ' + date + '/' + today.getMonth() + 1 + '/'
        + today.getFullYear() + ', ' + hour + 'h' + ":"
        + minutes + 'p' + ' (GMT +7)';
    document.getElementById("time").innerHTML = time;
    setTimeout("time()", 1000)

}
time()

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
var user = document.querySelector('.header-user-success')
var userList = document.querySelector('.user-list')
user.onclick = (function () {
    userList.classList.toggle('hiden')
})