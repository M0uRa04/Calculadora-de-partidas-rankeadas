let nickName
let wins
let defeats

function rankCalculator(wins, defeats) {
    let rank
    let totalAmount = wins - defeats
    if(totalAmount < 10){
        rank = "Ferro"
        return rank

    }else if(totalAmount >=11 && totalAmount <=20){
        rank = "Bronze"
        return rank
    
    }else if(totalAmount >=21 && totalAmount <=50){
        rank = "Prata"
        return rank
    
    }else if(totalAmount >=51 && totalAmount <=80){
        rank = "Ouro"
        return rank
    
    }else if(totalAmount >=81 && totalAmount <=90){
        rank = "Diamante"
        return rank
    
    }else if(totalAmount >=91 && totalAmount <=100){
        rank = "Lendário"
        return rank
    
    }else{
        rank = "Imortal"
        return rank   
    }

    
}