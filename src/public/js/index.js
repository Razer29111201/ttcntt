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

var user = document.querySelector('.header-user-success')
var userList = document.querySelector('.user-list')
user.onclick = (function () {
    userList.classList.toggle('hiden')
})

$.ajax({
    url: '/login/logindia',
    type: 'get',

    success: (function (data) {
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
        }


    }),
    error: function (e) {
        console.log(e.message);
    }


}).then(data => {
    setCookie('token', data.token, 1)
    console.log('thành công', data);

})
    .catch(error => {
        console.log('sai roi');
    })


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

$.ajax({
    url: '/ttvb/value',
    type: 'get',
    success: (function (data) {


        ttvb = data.ttvb
        console.log(data.ttvb[3].title);
        $('.info-list').html(` <li class="info-item">
            <a href="/ttvb">${data.ttvb[0].title}</a>
        </li>
        <li class="info-item">
            <a href="/ttvb">
            ${data.ttvb[1].title}</a>
        </li>
        <li class="info-item">
            <a href="/ttvb">
            ${data.ttvb[2].title}</a>
        </li>
        <li class="info-item">
            <a href="/ttvb">
            ${data.ttvb[3].title}</a>
        </li>
        <li class="info-item">
            <a href="/ttvb">
            ${data.ttvb[4].title}</a>
        </li>`)



    }),
    error: function (e) {
        console.log(e.message);
    }
})

$.ajax({
    url: '/ttvb/value',
    type: 'get',
    success: (function (data) {



    }),
    error: function (e) {
        console.log(e.message);
    }
})


function checkAlert(evt) {
    if (evt.target.value === "Bộ Tài Nguyên Môi Trường") {
        window.location.href = 'http://www.monre.gov.vn'
    }
    if (evt.target.value === "Bộ Tư Pháp") {
        window.location.href = 'http://www.moj.gov.vn/'
    }
    if (evt.target.value === "3") {
        window.location.href = 'http://dangcongsan.vn/'
    }
    if (evt.target.value === "4") {
        window.location.href = 'http://www.vietlaw.gov.vn/'
    }
    if (evt.target.value === "5") {
        window.location.href = 'http://www.chinhphu.vn/'
    }
    if (evt.target.value === "6") {
        window.location.href = 'http://www.quangninh.gov.vn'
    }

}
