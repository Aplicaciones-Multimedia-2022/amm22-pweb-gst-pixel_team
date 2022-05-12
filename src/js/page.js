//Page Logic
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content');

for(var i = 0; i < tabs.length; i++){   
    tabs[i].addEventListener('click',changeTab);
}

function changeTab(){
    for(var i = 0; i < tabs.length; i++){
        if(tabs[i] == this){
            tabs[i].classList.add('current');
            sections[i].classList.add('current');
        }else{
            tabs[i].classList.remove('current');
            sections[i].classList.remove('current');
        }
    }
}

function initplay(){
    tabs[GAME_TAB].classList.add('current');
    sections[GAME_TAB].classList.add('current');
    tabs[0].classList.remove('current');
    sections[0].classList.remove('current');
}

function playvideo(){
    $('video')[0].play();
} 
