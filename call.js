let User = function(){
    this.getUser=function(){
        return "vaibhav";
    }
}


setTimeout(function(){console.log("Time 3"),3000});
setTimeout(function(){console.log("Time 2"),2000});
setTimeout(function(){console.log("Time 1"),1000});

/**
 * OutPut:
 * 
 * Time 3
 * Time 2
 * Time 1
 * 
 * Please Change Outout To Following using asynchronus  methodlogies
 * 
 * Time 1
 * Time 2
 * Time 3
 * 
 * 
 */


 
function User(){
    console.log("hello");
}
