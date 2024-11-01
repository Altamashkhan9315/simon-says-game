let gamereq=[];
let userreq=[];
let started=false;
let level=0;
let highest=0;
let h3=document.querySelector('h3');
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(event){
    if(event.code=="Enter"){
        if(started==false){
            started=true;
            levelup();
        }
        
    }
});
let btns=["red","blue","green","pink"]

function levelup(){
    userreq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let ranidx=Math.floor(Math.random()*3);
    let randelement=btns[ranidx];
    let rndbtn=document.querySelector(`.${randelement}`);
    gamereq.push(randelement);

    flash(rndbtn);
}


let btn=document.querySelectorAll('button');
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function bnpress(){
    
    let btn=this;
    
    let usercolor=this.id;
    userreq.push(usercolor);
    flash(btn);
    check(userreq.length - 1);
}
let allbtn=document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener("click",bnpress);

}

function check(idx){

    if (userreq[idx] === gamereq[idx]){
        if(userreq.length == gamereq.length){
            setTimeout(levelup,1000);
        }
        
    } else {
        if(level>highest){
            highest=level;
        }
        h2.innerText=`highest score is ${highest}`;
        document.querySelector('body').style.backgroundColor="red";
        h3.innerHTML=`Game Over ! your score was <b>${level}</b><br> Press Enter To start again`;
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },250);
        started=false;
        userreq=[];
        gamereq=[];
        level=0;
        
        
        
    }
}

