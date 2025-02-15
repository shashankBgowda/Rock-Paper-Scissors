let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscoreparam = document.querySelector('#user-score');
const compscoreparam = document.querySelector("#compscore");

/*lets generate random choice form computer*/
const gencompchoice = ()=>{
    const options = ['rock','paper','seassors'];
    const randindx= Math.floor(Math.random()*3); /*this will select a number between 0-3[0,1,2]*/
    return options[randindx];
}


const drawgame=()=>{
    msg.innerText="Its a draw play again..!";
    msg.style.backgroundColor="blueviolet ";
}

const showwinner = (userwin, userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userscoreparam.innerText=userscore;
        
        msg.innerText=`You WIN...! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        

    }else{
        compscore++;
        compscoreparam.innerText=compscore;
        msg.innerText=`You Loose.. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame= (userchoice)=>{
    console.log("user=choice = ", userchoice);
    //generate comp choice
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            //seasors, paper
            userwin= compchoice === "paper" ? false : true;
        }else if(userchoice==='paper'){
            //rock, seassors
            userwin = compchoice ==='scassors'? false: true;
        }else{
            //rock, paper
            userwin= compchoice==='rock'? false: true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute('id');
        playgame(userchoice);
    });
});
