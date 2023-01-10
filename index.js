
function ViewModeButton(name){
    let btn = document.getElementsByClassName(name)[0];

    if(btn.id == 'selected')
        return;

    document.getElementsByClassName('fa-solid fa-house')[0].setAttribute('id', '');
    document.getElementsByClassName('fa-solid fa-user-group')[0].setAttribute('id', '');
    document.getElementsByClassName('fa-solid fa-display')[0].setAttribute('id', '');
    document.getElementsByClassName('fa-solid fa-store')[0].setAttribute('id', '');
    document.getElementsByClassName('fa-solid fa-gamepad')[0].setAttribute('id', '');

    if(btn.id == ""){
        btn.setAttribute('id', 'nav-bar-middle-tabs-selected');
    }
}