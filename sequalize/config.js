let devConfig = {
    user:"root",
    password:"atc9dpfoxtrot",
    host:"localhost"
}

let prodConfig = {
    user : "root"
}



let getConfig = (env) =>{
    console.log("Hit get Config");
    console.log(env);
    if(env === undefined || env === null){
        console.log("Hello");
        console.error("Please Provide The Value");
        throw new Error('env_err');
    }
    if(env === 'development'){
        return devConfig;
    }
    
}


module.exports = getConfig;