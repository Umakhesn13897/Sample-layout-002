var MenuList = document.getElementById('menu-list');

MenuList.style.maxHeight = '0px';

function togglemenu(){

    if(MenuList.style.maxHeight == '0px'){
        MenuList.style.maxHeight = '130px';
    }
    else{
        MenuList.style.maxHeight = '0px';
    }
}