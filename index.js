const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

// console.log(cardArray);
cardArray.sort(()=> 0.5 - Math.random())
// console.log(cardArray);


const grid = document.querySelector('#grid')
// const result = document.querySelector('#results')
// console.log(grid);
// console.log(result);

const displayResult = document.querySelector('#results')
let cardsChosen = []
let cardsChoosenId = []
let cardsWon = []

function createBoard(){
    for ( let counter = 0; counter < cardArray.length; counter++ ){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',counter)
        // console.log(card,counter+1)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}


// check the match
function checkTheMatch(){
    console.log("Check for match");
    const cards = document.querySelectorAll('img')
    console.log(cards)

    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
    
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("You have clicked on same images")
    }
    else if(cardsChosen[0] === cardsChosen[1]){
        alert("You have found the right food match")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        // remove click ability on cards
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optionTwoId].removeEventListener('click',flipcard)

        cardsWon.push(cardsChosen)
        console.log(cardsWon)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Plese Try again by selecting right match")
    }
    cardsChosen = []
    cardsChoosenId = []

    displayResult.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2){
        displayResult.textContent = "Congratulation! You Won"
    }
}
//check the card
function flipcard(){
    // console.log(cardArray);
    let cardId = this.getAttribute('data-id')
    console.log("Cards clicked", cardId)
    cardsChosen.push(cardArray[cardId].name)
    console.log("Card Chosen", cardsChosen)
    cardsChoosenId.push(cardId)
    // console.log(cardsChoosenId)
    // console.log(this);
    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkTheMatch,500)
    } 
}
createBoard();