// ?----------   valyuta  -----------

//? usd 1.70    50 * 1.70 => AZN
//? euro 1.75
//? kwd 5.51




let amount = Number(prompt("mebleg daxil edin !"));

if (amount <=0 || isNaN(amount)){
    alert("duzgun mebleg daxil edin !")
}
else{

let msg = `valyuta secin !
    USD
    EUR
    RUB
    TRY`

    let currecy = prompt(msg).toLowerCase();

switch (currecy) {
    case "usd":
        alert(`${amount} USD ${amount *1.70} manatdir `)
        break;
    case "eur":
        alert(`${amount} EUR ${amount * 1.75} manatdir !`)
        break;
    case "rub":
        alert(`${amount} RUB ${amount * 0.175 } manatdir `)
        break;
    case "try":
        alert(`${amount} TRY ${amount *  21 } manatdir `)
        break;
    default:
        alert("duzgun valyuta qeyd edin !")
        break;
}


}
