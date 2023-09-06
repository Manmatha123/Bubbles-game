
let gmfield=document.getElementById('gm-field');
let rn=document.getElementById('rn');
let timerno=document.getElementById('timer');
let score=document.getElementById('score');
let restart=document.getElementById('restart');


let myscore=0;

// create bubble

const bubble=()=>{
    for(i=0;i<60;i++){
        let rnno=Math.floor(Math.random()*10)
        gmfield.innerHTML +=`<section>${rnno}</section>`
    }
}

// random no create
const numcreate=()=>{
    rn.innerText=Math.floor(Math.random()*10)
}

// timer set

const timer = () => {

    let mtime =60;

    const settimeinter = setInterval(() => {
        mtime -= 1;
     
        if (mtime >0) {
            timerno.innerText = mtime
            gmfield.style.backgroundColor="rgb(255, 14, 62)";
        }
        else if(mtime==0){
            timerno.innerText ="00";
            gmfield.innerHTML="";
            rn.innerText="00";
            gmfield.style.backgroundColor="";
            gmfield.innerHTML +=`
           
            <div class="publicres">
            <h2>Game Over</h2>
            <h4>Your Score Is:<span> ${myscore} </span> :)</h4>
            </div>
            `
        }
        else (
            clearInterval(settimeinter)    
        )
    }, 1000);

}


gmfield.addEventListener("click",(e)=>{
   
    let clkval= +e.target.innerText;
    let rnnum= +rn.innerText;

  if(clkval===rnnum){
    myscore +=2;
score.innerHTML=myscore;
gmfield.innerHTML="";
bubble();
numcreate()
  }

})


// restart the game

restart.addEventListener("click",()=>{
    location.reload();
})

timer();
bubble();
numcreate();
