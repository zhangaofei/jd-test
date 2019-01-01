
export function arrJson(num) {
    let arr=[];
    if(num==undefined){
        for(let i=0;i<5;i++){
            arr.push({name:'name_'+i})
        }
    }else {
        for(let i=0;i<num;i++){
            arr.push({name:'name_'+i})
        }
    }
    return arr;
}

