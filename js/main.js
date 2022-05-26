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

