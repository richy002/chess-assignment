function chess8(size){

    let str = "";

    for(let i = 0; i <size; i++){
    
        for(let j = 0; j <size; j++){
            if (i % 2 == 0){
                if(j % 2 == 0){
                    str += "#"
                }else {
                    str += " "
                }

            }else {
                if (j % 2 == 0){
                    str += " "
            }else {
                 str += "#"
                }
            }
        }
        str += "\n"
    }

    return str;

 }
 console.log(chess8(8));