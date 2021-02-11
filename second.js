// Json Ajax loading
var output = "";
var x=document.getElementById("demo");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState==4&&this.status) {
        var JSONlist = JSON.parse(this.responseText);
        var Objlist = JSONlist.products;
        for (let i = 0; i < Objlist.length; i++) {


            // if (i==3||i==5||i==6) {
            //     output += "<input type = checkbox checked disabled style=width:20px;height:20px; >"+Objlist[i].title+"<br>"+"<hr>";
            // }
            // else{
            //     output += `<input type =checkbox onchange = flagCheck();  style=width:20px;height:20px;>${Objlist[i].title}<br><hr>`
            // }

            output += `<input type =checkbox onchange = flagCheck();  style=width:20px;height:20px;>${Objlist[i].title}<br><hr>`
            
               
            document.getElementById("demo").innerHTML=output;  
            document.getElementById("demo").style.padding="20px"; 
            document.getElementById("demo").style.fontSize="25px"; 
            document.getElementById("demo").style.fontFamily="TimesNewRoman";        
        }
        
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
var flag = 0;
function flagCheck(){
    flag++;
    if (flag == 5){alert("Congrats!!5 tasks has completed!!");}
}
xhttp.onload=function(){
    alert("Json data is loaded");
}