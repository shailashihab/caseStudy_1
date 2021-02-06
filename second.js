// Json Ajax loading
var output = "";
var x=document.getElementById("demo");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState==4&&this.status) {
        var JSONlist = JSON.parse(this.responseText);
        var Objlist = JSONlist.products;
        for (let i = 0; i < Objlist.length; i++) {


            if (i==3||i==5||i==6) {
                output += "<input type = checkbox checked disabled >"+Objlist[i].name+"<br>"+"<hr>";
            }
            else{
                output += `<input type =checkbox onchange = flagCheck();>${Objlist[i].name}<br><hr>`
            }

             
               
            document.getElementById("demo").innerHTML=output;            
        }
        
    }
}

xhttp.open("GET","list.json",true);
xhttp.send();
var flag = 0;
function flagCheck(){
    flag++;
    if (flag == 5){alert("Congrats!!5 tasks has completed!!");}
}
xhttp.onload=function(){
    alert("Json data is loaded");
}