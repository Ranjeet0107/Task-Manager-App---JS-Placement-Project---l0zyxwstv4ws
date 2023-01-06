function funNewtask(){
    let x=document.getElementById("Newtask");
    if(x.style.display==="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
}

function addMore(){
    document.getElementById("error").innerHTML="";
    let Task=document.getElementById("task").value;
    if(Task==""){
        document.getElementById("error").innerHTML="Please enter a Task Title!";
    }else{
           let Box=document.getElementById("box");
           let Li=document.createElement("input.text");
           Li.textContent=Task;

           let a=document.createElement("a");
           a.textContent="X";
           a.href="javascript:void(0)";
           a.className="remove";
           Li.appendChild(a);

           let pos=Box.firstElementChild;
           if(pos==null){
            Box.appendChild(Li);
           }else{
            Box.insertBefore(Li,pos);
           }    
    }
    document.getElementById("task").value="";
}

let btn=document.querySelector("ul");
btn.addEventListener("click",function(e){
    let Box=document.getElementById("box");
    let li=e.target.parentNode;
    Box.removeChild(li);
})

function allow(event){
    event.preventDefalt();
}
function drag(event){
    event.dataTransfer.setData("text",event.target.id);
}
function drop(event){
    event.preventDefalt();
    var Data=event.dataTransfer.getElementById(Data);
}