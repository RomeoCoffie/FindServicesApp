function treeConstructor(strArr){
    const newStrArr=[]
    strArr.forEach(element => {
        let elArray=element.split('')
        newStrArr.push([Number(elArray[1]),Number(elArray[3])])
    });
    return function(){
            for (let i=0; i<newStrArr.length ; i++){
                for (let j=i+1; j<newStrArr.length; j++){
                    for (let k=j+1; k<newStrArr.length; k++){
                        if ((newStrArr[i][1]===newStrArr[j][1]===newStrArr[k][1] && newStrArr[i][0]!==newStrArr[j][0]!==newStrArr[k][0]) || (newStrArr[i][1]!==newStrArr[j][1]!==newStrArr[k][1] && newStrArr[i][0]===newStrArr[j][0]===newStrArr[k][0])) {
                            return false
                        } else {
                            return true
                        }
                    }    
                }
            }
    }
}
treeConstructor(['(1,2)','(2,4)'])