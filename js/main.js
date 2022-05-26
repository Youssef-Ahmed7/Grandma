document.querySelector("header .container i").addEventListener("click",function(){
    document.querySelector("  header + section .container .mainnav").classList.toggle("downnav");
});
let change = document.querySelector(".about .container .right .image img");
let chimages =["imgs/sweets-3.jpeg" ,"imgs/cake-3.jpeg", "imgs/sweets-1.jpeg"];
setInterval(function(){
 let random = Math.floor(Math.random() * chimages.length);
 change.style.opacity = "1"
 change.src = chimages[random];
 
},4000);
setInterval(function(){
    change.style.opacity = "0";
},3700);
// starting filter section 
let divs = document.querySelectorAll(".store .content >div");
let lis = document.querySelectorAll(".store ul li");
for (let i = 0 ; i<lis.length ;i++){
    lis[i].addEventListener("click",function(){
        for (let j = 0 ;j<lis.length ;j++){
            lis[j].classList.remove("active");
        }
        this.classList.add("active");
         for (i=0 ; i<divs.length ; i++){
             divs[i].style.display = "none";
             
         }
        let need = document.querySelectorAll(this.dataset.cat);
        for (i =0 ;i <need.length;i++){
            need[i].style.display = "block";
        }
    })
}
//starting up button
let button = document.getElementById("up");

window.addEventListener("scroll" , function(){
    if (scrollY >= 400){
        button.style.opacity = "1";
        button.style.pointerEvents = "all";
    }
    else {
        button.style.opacity= "0";
        button.style.pointerEvents = "none";
    }
})
button.onclick = function(){
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
};
// setarting pop section
let iconl = document.getElementById("left");
let iconr = document.getElementById("right");
let layout = document.getElementById("layout");
let pop = document.getElementById("pop");
let clicks = document.querySelectorAll(".store .content >div img");
let needdimgs=[];
for (i = 0 ; i<lis.length;i++){
    lis[i].addEventListener("click" , function(){
   needdimgs = document.querySelectorAll(`.store .content ${this.dataset.cat} img`);
    console.log(needdimgs);
})
}

for (i = 0 ; i<clicks.length ;i++){
    clicks[i].addEventListener("click" , function(){
        document.getElementById("hot").src = `${this.src}`;
        pop.style.transform = " translate(-50% , -50%) scale(1)";
        layout.style.zIndex = "10";
        layout.style.opacity = "1"
    })
}

document.querySelector(".pop .content button").addEventListener("click" , function(){
    pop.style.transform = " translate(-50% , -50%) scale(0)";
    layout.style.zIndex = "-1";
    layout.style.opacity = "0"
})
iconl.addEventListener("click",function(){
    document.getElementById("hot").src = `${needdimgs[Math.floor(Math.random()*needdimgs.length)].src}`;

})
iconr.addEventListener("click",function(){
    document.getElementById("hot").src = `${needdimgs[Math.floor(Math.random()*needdimgs.length)].src}`;

})



