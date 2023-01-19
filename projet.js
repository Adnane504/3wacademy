let tache= document.getElementById("add");
let elt= document.getElementById("todolist");
tache.addEventListener('click',()=> {
    let inp=document.getElementById("input").value;
    if(inp==""){
        alert("Veuillez entrer une tâche");
    }
    else{

    let li= document.createElement("li");
    
    li.innerHTML=inp;

    let btn1= document.createElement("button");
    let btn2= document.createElement("button");

    btn1.innerHTML="Check";
    btn2.innerHTML="Remove";

    li.appendChild(btn1);
    li.appendChild(btn2);

    elt.appendChild(li);

    
    document.getElementById("input").value="";

    btn1.onclick= function(){
        let va= this.parentElement;
        va.style.setProperty('text-decoration','line-through');
    }
    btn2.onclick= function(){
        let suppr= this.parentElement;
        suppr.style.display="none";
    }


    }

});

let del=document.getElementById("blank");
del.onclick= function(){
    elt.innerHTML="";
}