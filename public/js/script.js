
let themeDots = document.getElementsByClassName('theme_dot');

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        themeSetting(mode)
    })
}

function themeSetting(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = 'css/default.css'
    }
    if(mode == "blue"){
        document.getElementById('theme-style').href = 'css/blue.css'
    }
    if(mode == "green"){
        document.getElementById('theme-style').href = 'css/green.css'
    }
    if(mode == "purple"){
        document.getElementById('theme-style').href = 'css/purple.css'
    }
}