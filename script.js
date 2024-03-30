const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    //task a
    var res=result.filter((ele)=>ele.region==="Asia")
    var final=res.map((ele)=>console.log(ele.name.common));
    console.log(final);
    //task b
    var res2=result.filter((ele)=>ele.population<200000)
    var final1=res2.map((ele)=>ele.name.common)
    console.log(final1);
    //task c
    var task3=result.forEach((ele)=>console.log("name",ele.name,"capital",ele.capital,"flag",ele.flag));
    //task d
    var a=[];
    for(var i=0;i<result.length;i++){
    
        a.push(result[i].population);
    }
    
    const result1=a.reduce((sum,i)=>{
           return sum+i;
    },0)
    console.log(result1);
    //task e

    var resd=result.filter((ele)=>ele.currencies.name==="United States dollar")
    var final2=resd.map((ele)=>console.log(ele.currencies));
    console.log(final2);
}