let cards = document.querySelectorAll(".card");
let cardOne , cardTwo 
let count = 0;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
let value = null;

console.log(cardOne, cardTwo)
console.log(cards)

cards.forEach((card) => {
    
    
      
        card.addEventListener('click', function (card1, index) {
            console.log(value)
            if(value == null){
            card.classList.add("flip")
            if (cardOne != null) {
                value = 1;
                console.log(value)

                cardTwo = card
                
                
                matchTheCard(cardOne, cardTwo);
                
            } else {
                
                cardOne = card
                
                
                
            }
        }
            
            
            
            
        })
        
    })

function matchTheCard(card1, card2) {
    imageOne = card1.querySelector('img').src
    imageTwo = card2.querySelector('img').src



    if (imageOne === imageTwo) {
        count++


        console.log("both card mached")
        card1.style.pointerEvents="none"
        card2.style.pointerEvents="none"
        cardOne = null;
        cardTwo = null;
        
        if (count == 8) {
            setTimeout(() => {

                
                cards.forEach((card, index) => {
                    card.classList.remove('flip')
                })
                
            }, 1000)
            count = 0;
            cardShffel();
        }
        


    } else {
        card1.querySelector('.back-vies').classList.add('shake')
        card2.querySelector('.back-vies').classList.add('shake')
        setTimeout(() => {
            card1.querySelector('.back-vies').classList.remove('shake')
            card2.querySelector('.back-vies').classList.remove('shake')
            
            
            card1.classList.remove('flip')
            card2.classList.remove('flip')
            cardOne = null;
            cardTwo = null;
        }, 1000)
       
    }
    value = null;
}


function cardShffel(){


    for (var i = 15; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    cards.forEach((card, index) => {

        card.querySelector("img").src = `http://127.0.0.1:5500/New%20folder/img-1%20(${array[index]}).png`

    })
    console.log(cards)
    value = null;
}

cardShffel()





