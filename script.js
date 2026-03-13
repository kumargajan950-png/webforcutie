function show(page){
    document.querySelectorAll(".page").forEach
    (p=>{
        p.classList.remove("active")
    
    })
    document.getElementById(page).classList.add("active")
}

function send(){
    alert("can you say me on whatsapp same words")
}

/* typing animation */
let text="HTML CSS Javascript developer"
let i=0

function type(){
    if(i<text.lenghth){
        document.getElementById("typing").innerHTML+=text.chatAt(i)
        i++
        settimeout(type,50)
    }
}

type()