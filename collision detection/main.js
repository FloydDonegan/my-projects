$(function(){
    let i =  $(".inner-box");
    let o = $(".outer-box");
    let r = $(".redbox");





// red box draggable function
    r.draggable({
        drag: function(){
            if(collision(r, o)){
                o.css({
                    // gold box turns green on collision
                    background: "green"
                })
            }
            else{
                o.css({
                    background: "gold"
                })
            }
        }
    });


// black box draggable function
    i.draggable({
        drag: function(){
            if(collision2(i, o)){
                o.css({
                      // gold box turns green on collision
                    background: "green"
                })
            }
            else{
                o.css({
                    background: "gold"
                })
            }
        }
    });



//collision detection for small red box
    function collision(smlRect, bgRect){
        //small box values
        let smlRectX = smlRect.offset().left;
        let smlRectY = smlRect.offset().top;
        let smlRectW = smlRect.width();
        let smlRectH = smlRect.height();
        
        //big box values
        let bgRectX = bgRect.offset().left;
        let bgRectY = bgRect.offset().top;
        let bgRectW = bgRect.width();
        let bgRectH = bgRect.height();

    
        // left side of small red box
        let sbLeft = smlRectX;
        //right side of small red box
        let sbRight = smlRectX + smlRectW;
        //top of small red box
        let sbTop = smlRectY;
        //bottom of small red box
        let sbBottom = smlRectY + smlRectH;

        // left side of big gold box
        let bbLeft = bgRectX;
        //right side of big gold box
        let bbRight = bgRectX + bgRectW;
        //top of big gold box
        let bbTop = bgRectY;
        //bottom of big gold box
        let bbBottom = bgRectY + bgRectH;

        
        if(sbRight >= bbLeft && sbBottom >= bbTop && sbLeft <= bbRight && sbTop <= bbBottom){
            return true;
        }
        else {
            return false;
        }
    }
   

//collision detection for black box
    function collision2(blackBox, goldBox){
        let blkX = blackBox.offset().left;
        let blkY = blackBox.offset().top;
        let blkW = blackBox.width();
        let blkH = blackBox.height();

        let gldX = goldBox.offset().left;
        let gldY = goldBox.offset().top;
        let gldW = goldBox.width();
        let gldH = goldBox.height();

        let bLeft = blkX;
        let bRight = blkX + blkW;
        let bTop = blkY;
        let bBottom = blkY + blkH;

        let gLeft = gldX;
        let gRight = gldX + gldW;
        let gTop = gldY;
        let gBottom = gldY + gldH;

        if(bRight >= gRight || bLeft <= gLeft || bTop <= gTop || bBottom >= gBottom){
            return true;
        }
        else{
            return false;
        }
    }
   
})