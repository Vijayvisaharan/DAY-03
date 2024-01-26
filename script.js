var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    //Question 1;
    for(var i =0;i<res.length;i++){
        console.log((res[i].flags.png))
    }

    //Question 2;
    for(var i =0;i<res.length;i++){
        console.log(res[i].name.common,res[i].region,res[i].subregion,res[i].population)
    }
}