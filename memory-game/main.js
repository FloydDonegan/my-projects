$(function () {
    let card = $(".cards p");
    let cardBB = $(".cards")
    let refresh = $(".refresh");
    let wl = $(".win-lose");
    let fClick = false;
    let fCard;
    let sCard;
    let pointKeeper = 0;


    mixCards();

    card.click(function () {
        
        if (!fClick) {
            fClick = true;
            fCard = $(this);
            fCard.fadeOut();
        }
        else {
            fClick = false;
            sCard = $(this);
            sCard.fadeOut()
            console.log(pointKeeper);
            match();
            winlose();
        }

    })


    refresh.click(function(){
        card.fadeIn();
        pointKeeper = 0;
        setTimeout(mixCards, 1000);
    })



    function match() {
        if (fCard.data().id == sCard.data().id) {
            pointKeeper++;
        }
        else {
            fCard.delay(1350).fadeIn();
            sCard.delay(1000).fadeIn();
        }
    }

    function winlose(){
        if(pointKeeper == 5){
            wl.fadeIn();
            setTimeout(restart, 2000);
        }
    }

    function restart(){
        wl.fadeOut();
        card.fadeIn();
        pointKeeper = 0;
        setTimeout(mixCards, 1000);
    }

    function mixCards(){
       for(let c = cardBB.length - 1; c > 0; --c){
        let randomPos = Math.floor(Math.random() *(c+1));
          cardBB[randomPos].style.order = c;
          cardBB[c].style.order = randomPos;
       }
      

    }


})