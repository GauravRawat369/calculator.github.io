function openLoginPage() {
    var url = 'https://gauravrawat369.github.io/loginpage.github.io/';
    var win = window.open(url, "_self");
    win.focus();
}
function openPlayGame() {
    var url = 'https://gauravrawat369.github.io/biker.github.io/';
    var win = window.open(url, "_self");
    win.focus();
}
function openHome() {
    var url = 'https://gauravrawat369.github.io/websitetemplate5.github.io/';
    var win = window.open(url, "_self");
    win.focus();
}
function openAboutUs() {
    var url = 'https://gauravrawat369.github.io/aboutme.github.io/';
    var win = window.open(url, "_self");
    win.focus();
}
(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equals');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function(button) {
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value == '')
        {
            screen.value = "Enter Values";
        }
        else
        {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click',function(e){
      
        screen.value = "";
    })
})();