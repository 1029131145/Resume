$("img.load").lazyload({effect: "fadeIn", threshold: -150});

function canvas() {
    var ww = $(window).width();
    var wh = $(window).height();

    $('#canvas').attr('width', ww);
    $('#canvas').attr('height', wh);

}


var float = $('#float');


function init() {
    canvas();
    //float.fadeTo(0,0.5);
}
init();


window.onresize = function () {
    canvas();
};


var dlgtrigger = document.querySelector('[data-dialog]'),
    somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
    dlg = new DialogFx(somedialog);

dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));



function _top(){
    $('body,html').animate({
        'scrollTop':0
    },1000);


}