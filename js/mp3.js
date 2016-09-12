var currentIndex = -1;

var audio = document.getElementById("audio");
audio.volume = 0.5;
var mlist = [
    "Time - Hans Zimmer",
    "春色のワルツ",
    "夏祭り、夢花火",
    "歳月-雲流れ-"
];

var msrc = [
    "http://124.202.164.15/files/2124000007503E69/124.167.236.28/m10.music.126.net/20151212020828/53c834ae003e56c471bc72125360cb9f/ymusic/e0f0/1e2d/20e8/d52fc896cc20c20da98d5ff5880de087.mp3",
    "http://124.202.166.49/m10.music.126.net/20160912162300/56b5d7f84d66a1edc8a7d2478019efb6/ymusic/bb4e/1c88/09be/5aca0c5ff4239541ba2324043f2889eb.mp3",
    "http://124.202.164.13/files/3164000007BC2E51/60.10.3.99/m10.music.126.net/20160223124146/fa3ecb930e081937d5e497d6b9e2eb51/ymusic/0cf2/f460/11d8/168be67e64a6ad32efb0f0d8e52cebd8.mp3",
    "http://219.238.7.66/files/5014000007BC2BF6/42.81.9.32/m10.music.126.net/20160223123714/589e73170007d7c4698155522ea04ca8/ymusic/7cf9/ae91/eac9/cd00a5c2b42cc4d47e19a36579c84923.mp3"
];

var btn = $("#audio_btn");

if (currentIndex == -1) {
    _qie(0);
}
function Song() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
Song();
var num = 0;
audio.addEventListener('ended', function () {
    _qie();
    Song();
}, false);


function _qie(u) {
    if (isNaN(u)) {
        with (currentIndex == num) {
            num = GetRandomNum(msrc.length);
        }
    } else {
        num = u;
    }
    currentIndex = num;
    num = currentIndex;
    audio.src = msrc[currentIndex];
    btn.attr("title", mlist[currentIndex]);
    $('#audio_text').html(mlist[currentIndex]);
}


btn.click(function () {
    $(this).find("i").hasClass("fa-spin") ? $(this).find("i").removeClass("fa-spin") : $(this).find("i").addClass("fa-spin");
    Song();
});

function GetRandomNum(num) {
    return parseInt(Math.random() * num);
}


var x = 0, move = false;
$('#b').mousedown(function (e) {
    var left = $('#b').css('left');
    x = e.pageX;
    x = x - 1 - parseInt(left) + 1;
    move = true;
});
$('#b').mouseup(function (e) {
}, function (e) {
    move = false;
});
$(document).mouseup(function (e) {
    move = false;
});
$(document).mousemove(function (e) {
    if (move) {
        var $x = e.pageX;
        $x = $x - x;
        if ($x <= 0) {
            $x = 0;
        } else if ($x >= 100) {
            $x = 100;
        }
        $('#b').css('left', $x + '%');
        $('#bo').width($x + '%');
        audio.volume = ($x / 100);
    }
});
