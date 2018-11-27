function changeCard(card){
    card.suit = "clubs";
}

let cards = [ 
    {
    suit: "Hearts",
    value: "Queen"
    }

];

changeCard(card);

console.log(card.suit);