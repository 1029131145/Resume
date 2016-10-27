var vm = new Vue({
    el: '#body',
    data: {
        Project: {},
        Plugin: {},
        Time: {},
        Main:{}
    },
    methods: {
        getData: function () {
            $.getJSON("Data/Project.json", function (d) {
                vm.Project = d;
            });
            $.getJSON("Data/Plugin.json", function (d) {
                vm.Plugin = d;
            });
            $.getJSON("Data/Time.json", function (d) {
                vm.Time = d;
            });
            $.getJSON("Data/Main.json", function (d) {
                vm.Main = d;
            });
        }
    }
});
vm.getData();


var float = $('#float');

var dlgtrigger = document.querySelector('[data-dialog]'),
    somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
    dlg = new DialogFx(somedialog);

dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));


function _top() {
    $('body,html').animate({
        'scrollTop': 0
    }, 1000);
}

function weixin() {
    $("#weixin").click();
}


$(function () {
    setTimeout(function () {
        //console.clear();

        console.log('我是一个充满活力\n对前端由衷热爱\n善于发现问题的前端工程师\n我目前正在寻找前端工程师岗位\n希望借此机会为贵司献上我的一点绵薄之力\n快招我到碗里来吧。')

    }, 1000);
});