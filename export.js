function sum(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
 function div(x,y){
    if(y===0){
        console.log('y should be greater than zero');
    }else{
        return x/y;
    }
}

export const message = (name,age) => {
    // const name = "vishnu";
    // const age = 20;
    return name + ' is ' + age + ' years old.';
};

export const name='yashwanth';
export const age =18;

export default {sum,mul,div,sub};