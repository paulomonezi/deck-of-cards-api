document.getElementById('draw-card').addEventListener('click', () =>{
    drawCardFromShuffledDeck()
})

async function createShuffledDeck(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url)
    return await response.json()
}

async function drawCard(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url)
    return await response.json()
}

async function drawCardFromShuffledDeck(){

    const deck = await createShuffledDeck()
    const card = await drawCard(deck.deck_id)
    const cardImage = card.cards[0].image
    document.getElementById('card').src = cardImage
}

drawCardFromShuffledDeck()