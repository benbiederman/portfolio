const cardList = document.querySelector('.card-list');
const displayCard = document.querySelector('.display-card');



search();
randomPokemon();



function randomPokemon(){
    let randomChoice = Math.floor(Math.random() * 15);
    let pokemon = ['Wartortle', 'Pikachu', 'Alakazam', 'Growlithe', 'Psyduck', 'Gyarados', 'Ivysaur', 'Haunter', 'Poliwrath', 'Electabuzz', 'Niodoking', 'Zapdos', 'Koffing', 'Lapras', 'Flareon']

    searchPokemon(pokemon[randomChoice]);
}

function search(){
    const input = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let search = input.value.toLowerCase();

        //Find Pokemon Data
        searchPokemon(search)
        
        //Clear search
        input.value = '';
    })
}

async function searchPokemon(pokemon){
    const authorization = `97c41a69-a870-4d27-bc66-6c41de0eafc3`;

    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`, {
        method: 'GET',
        mode:'cors',
        headers: {
            Accept: 'application/json',
            Authorization: authorization
        }
    });

    const pokemonData = await response.json();
    clear(cardList);

    try {
        pokemonInformation(pokemonData.data);

    } catch {
        console.log('error');
        noData();
    }
}

function pokemonInformation(cards){
    createDisplay(cards, cards[0])

    cards.forEach((card) => {
        createThumbnail(cards, card)
    })
}

function createDisplay(cards, card){
    clear(displayCard);
    let pokemonCards = cards;
    let spot = cards.indexOf(card);

    const display = document.createElement('div');
    display.classList.add('display');
    displayCard.appendChild(display)

    //Previous Button
    const previousBtn = document.createElement('button');
    previousBtn.classList.add('previous');
    previousBtn.textContent = '<';
    display.appendChild(previousBtn);

    //Go to previous card in array
    previousBtn.addEventListener('click', () =>{
        if(spot === 0){
            spot = cards.length-1;
            cardImg.src = cards[spot].images.large
        } else {
            spot--;
            cardImg.src = cards[spot].images.large
        }

        cardImg.src = cards[spot].images.large
        cardName.textContent = cards[spot].name;
        cardSet.textContent = cards[spot].set.name;
        cardArtist.textContent = cards[spot].artist;
        thumbnailHighlight()

    })

    //Card image
    const cardImg = document.createElement('img');
    cardImg.src = card.images.large;
    cardImg.alt = card.name;
    display.appendChild(cardImg);

    //Next button
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next');
    nextBtn.textContent = '>';
    display.appendChild(nextBtn);

    //Go to next card in array
    nextBtn.addEventListener('click', ()=> {
        if(spot === cards.length-1){
            spot = 0;
        } else {
            spot++;
        }

        cardImg.src = cards[spot].images.large
        cardName.textContent = cards[spot].name;
        cardSet.textContent = cards[spot].set.name;
        cardArtist.textContent = cards[spot].artist;
        thumbnailHighlight()
    })

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    displayCard.appendChild(cardInfo);

    const cardName = document.createElement('h2');
    cardName.textContent = card.name;
    cardInfo.appendChild(cardName);

    const cardSet = document.createElement('p');
    cardSet.textContent = card.set.name;
    cardInfo.appendChild(cardSet);

    const cardArtist = document.createElement('p');
    cardArtist.textContent = card.artist;
    cardInfo.appendChild(cardArtist);

    const shopBtn = document.createElement('button');
    shopBtn.classList.add('shop-btn');
    shopBtn.textContent = "Shop Now";
    cardInfo.appendChild(shopBtn);

    shopBtn.addEventListener('click', () => {
        window.open(`https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311&_nkw=${cards[spot].name}+${cards[spot].set.name}&_sacat=0`, "_blank");
    })
}


//Creates all cards for the Pokemon
function createThumbnail(cards, card){
    thumbnailHighlight()

    //Create new div
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.tabIndex = 0;
    cardList.appendChild(thumbnail);

    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${card.images.large}`;
    pokemonImg.alt = `${card.name}`;
    thumbnail.appendChild(pokemonImg);

    pokemonImg.addEventListener('click', () => {
        createDisplay(cards, card)
        thumbnailHighlight()
    })
}

function thumbnailHighlight() {
    const mainImg = document.querySelector('.display-card img');
    const thumbnail = document.querySelectorAll('.thumbnail');
    const thumbnailsImg = document.querySelectorAll('.thumbnail img');

    for(let i = 0; i < thumbnailsImg.length; i++){
        if(mainImg.src === thumbnailsImg[i].src){
            thumbnail[i].classList.add('thumbnail-active');
        } else {
            thumbnail[i].classList.remove('thumbnail-active');
        }
    }
}

function noData(){
    clear(displayCard);
    clear(cardList);

    const display = document.createElement('div');
    display.classList.add('display');
    displayCard.appendChild(display)

    //Card image
    const cardImg = document.createElement('img');
    cardImg.src = `/img/missingno.jpg`;
    cardImg.alt = 'Missing Card';
    display.appendChild(cardImg);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    displayCard.appendChild(cardInfo);

    //Error Message
    const cardName = document.createElement('h2');
    cardName.textContent = `No Pokemon Found!`;
    cardInfo.appendChild(cardName);

    const cardMessage = document.createElement('p');
    cardMessage.textContent = `Please search again - unable to locate that search.`;
    cardInfo.appendChild(cardMessage);

}

function clear(section){
    if(section.innerHTML !== ''){
        section.innerHTML = '';
    }
}
