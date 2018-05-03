$(document).ready(function(){
    var randomnum = Math.floor(Math.random()* 101+19)
    console.log(randomnum)
    $('#goal').text(randomnum);

    var Total =0;
    var wins =0;
    var losses =0;
    $('#wins').text(wins);
    $('#losses').text(losses);

    var gem1= Math.floor(Math.random()*11+1)
    var gem2= Math.floor(Math.random()*11+1)
    var gem3= Math.floor(Math.random()*11+1)
    var gem4= Math.floor(Math.random()*11+1)

    function reset(){
        randomnum = Math.floor(Math.random()*101+19);
        $('#goal').text(randomnum);
         gem1= Math.floor(Math.random()*11+1);
         gem2= Math.floor(Math.random()*11+1);
         gem3= Math.floor(Math.random()*11+1);
         gem4= Math.floor(Math.random()*11+1);
         Total=0;
         $('#score').text(Total);

         
    }

    $("#gem1").on('click', function(){
        Total = Total + gem1;
        console.log(Total);
        $("#currentscore").text(Total);
        if (Total==randomnum){
            win();
        }
        else if ( Total>randomnum){
            loss();
        }
    });

    $("#gem2").on('click', function(){
        Total = Total + gem2;
        console.log(Total);
        $("#currentscore").text(Total);
        if (Total==randomnum){
            win();
        }
        else if ( Total>randomnum){
            loss();
        }
    });

    $("#gem3").on('click', function(){
        Total = Total + gem3;
        console.log(Total);
        $("#currentscore").text(Total);
        if (Total==randomnum){
            win();
        }
        else if ( Total>randomnum){
            loss();
        }
    });

    $("#gem4").on('click', function(){
        Total = Total + gem4;
        console.log(Total);
        $("#currentscore").text(Total);
        if (Total==randomnum){
            win();
        }
        else if ( Total>randomnum){
            loss();
        }
    });

    function win(){
        alert("You win!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    function loss(){
        alert("You lost!");
        losses++;
        $('#losses').text(losses);
        reset();
    }

});