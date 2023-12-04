let wins
let defeats

function amountCalculator(wins, defeats){
    let totalAmount = wins - defeats
    return totalAmount
}

function rankClassificator(amountCalculator) {
    let rank   
    if(amountCalculator < 10){
        rank ="Ferro"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
        
    }else if(amountCalculator >=11 && amountCalculator <=20){
        rank = "Bronze"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
    
    }else if(amountCalculator >=21 && amountCalculator <=50){
        rank = "Prata"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
    
    }else if(amountCalculator >=51 && amountCalculator <=80){
        rank = "Ouro"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
    
    }else if(amountCalculator >=81 && amountCalculator <=90){
        rank = "Diamante"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
    
    }else if(amountCalculator >=91 && amountCalculator <=100){
        rank = "Lendário"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)
    
    }else{
        rank = "Imortal"
        console.log(`O Herói tem de saldo ${amountCalculator} e está no nivel de ${rank}`)   
    }   
}

rankClassificator(amountCalculator(10, 5))