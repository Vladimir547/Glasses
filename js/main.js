var modalLog= document.querySelector('.hide__log');
var modalReg= document.querySelector('.hide__reg');
var overflow= document.createElement('div');
function OpenLog(){
    overflow.className= "overflow";
    document.body.appendChild(overflow);
    var height = modalLog.offsetHeight;
    modalLog.style.marginTop = -height / 2 + "px";
    modalLog.style.top = "50%";
}
function OpenReg(){
    overflow.className= "overflow";
    document.body.appendChild(overflow);
    var height = modalReg.offsetHeight;
    modalReg.style.marginTop = -height / 2 + "px";
    modalReg.style.top = "50%";
}
overflow.onclick = function(){
    modalLog.style.top = "-100%";
    modalReg.style.top = "-100%";
    overflow.remove();
}
window.onload = function(){
    document.querySelector('#show').onclick =showM;
    document.querySelector('#hide').onclick =hideM;
    var overflowMenu= document.createElement('div');
    document.onkeydown = function(event){
        if(event.code =='KeyM') showM();
        if(event.code =='Escape') hideM();
    }
    function showM(e){
        document.querySelector('.menu__header').style.display= 'block';
        document.querySelector('.hide__menu').style.display= 'block';
        overflowMenu.className= "overflow__menu";
        document.body.appendChild(overflowMenu);
    }
    function hideM(e){
        overflowMenu.remove();
        document.querySelector('.menu__header').style.display= 'none';
        document.querySelector('.hide__menu').style.display= 'none';
    }
    overflowMenu.onclick = function(){
        document.querySelector('.menu__header').style.display= 'none';
        document.querySelector('.hide__menu').style.display= 'none';
        overflowMenu.remove();
    }
}
