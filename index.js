let button = document.querySelector(".startpage")
let cards = document.querySelectorAll(".card");
let scorevalue = document.querySelector(".score")
let cardOne, cardTwo
let count = 0;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
let value = null;
let score = 0;
console.log(scorevalue.value)


button.addEventListener('click', () =>{
    button.classList.remove('startview')
})
if (value === null) {
    cards.forEach((card) => {

        card.addEventListener('click', function (card1, index) {

            card.classList.add("flip")
            if (cardOne != null) {
                value = 1;

                
                cardTwo = card
                cardTwo.style.pointerEvents = "none"


                matchTheCard(cardOne, cardTwo)

            } else {

                cardOne = card
                cardOne.style.pointerEvents = "none"

            }

        })

    })
}

function matchTheCard(card1, card2) {
    cards.forEach((card) => {
        if (!card.className.includes('flip')) {

            card.style.pointerEvents = "none"
        }


    })
    card1.style.pointerEvents = "none"
    card2.style.pointerEvents = "none"
    imageOne = card1.querySelector('img').src
    imageTwo = card2.querySelector('img').src



    if (imageOne === imageTwo) {
        count++


        
        card1.style.pointerEvents = "none"
        card2.style.pointerEvents = "none"
        cardOne = null;
        cardTwo = null;
        cards.forEach((card) => {
            if (!card.className.includes('flip')) {

                card.style.pointerEvents = "auto"
            }


        })
        score = score + 1

        if (count == 8) {
            scorevalue.innerHTML = `<p>Your Score is ${score}</p>`;
            setTimeout(() => {


                cards.forEach((card, index) => {
                    card.classList.remove('flip')
                })

                cardShffel();
            }, 3000)
            // button.classList.add('startview')
            count = 0;
            score = 0;
        }
        


    } else {
        card1.querySelector('.back-vies').classList.add('shake')
        card2.querySelector('.back-vies').classList.add('shake')
        setTimeout(() => {
            card1.querySelector('.back-vies').classList.remove('shake')
            card2.querySelector('.back-vies').classList.remove('shake')
            card1.style.pointerEvents = "auto"
            card2.style.pointerEvents = "auto"
            // console.log('??????????????', document.querySelectorAll('.flip'))

            card1.classList.remove('flip')
            card2.classList.remove('flip')
            cardOne = null;
            cardTwo = null;
            cards.forEach((card) => {
                if (!card.className.includes('flip')) {

                    card.style.pointerEvents = "auto"
                }
                //   console.log(card.className.includes('flip'))

            })
        }, 1000)
        score = score + 1;
    }
    // cards.forEach((card) => {
    //     let a = card.querySelector('.flip')
    //     if(a != null){
    //         console.log('111111111111111111',card.querySelector(".flip"))
    //         card.style.pointerEvents ="none"
    //     }
    //     else{
    //         card.style.pointerEvents = "auto"
    //     }

    // })

    value = null;

}










function cardShffel() {
    
    
    
    cards.forEach((card) => {
        card.style.pointerEvents = "auto"
    })
    for (var i = 15; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    cards.forEach((card, index) => {
        card.querySelector("img").src = `http://127.0.0.1:5500/New%20folder/img-1%20(${array[index]}).png`
    })
    button.classList.add('startview')
    
    value = null;
}








cardShffel()





