var name1=[];
function submit1(){
    var nm1=document.getElementById("nos1").value;
    var nm2=document.getElementById("nos2").value;
    var nm3=document.getElementById("nos3").value;
    var nm4=document.getElementById("nos4").value;
    name1.push(nm1);
    name1.push(nm2);
    name1.push(nm3);
    name1.push(nm4);
    document.getElementById("names").innerHTML=name1;
    console.log(name1);
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline-block";
}
function sort1(){
    var nam1=name1.sort();
    document.getElementById("names").innerHTML=nam1;
    console.log(nam1);
}