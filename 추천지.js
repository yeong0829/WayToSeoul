let point =0;

        $(document).ready(function() {
        $('#question1').show(); 
        $('#question2').hide(); 
        $('#question3').hide(); 
        $ ('#yes1').hide(); 
        $ ('#yes2').hide(); 
        $('#no1').hide();
        $('#no2').hide();

        $('#yes').click(function(){
        $ ('#question1').hide(); 
        $ ('#question2').show(); 
        $ ('#question3').hide(); 
        $ ('#yes1').show(); 
        $ ('#yes').hide(); 
        $ ('#yes2').hide(); 
        $ ('#no1').show(); //클릭 시 첫 번째 요소 숨김
        $ ('#no').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#no2').hide(); //클릭 시 첫 번째 요소 숨김
        point+=1;
        
    }); 
        $('#yes1').click(function(){
        $ ('#question2').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#question3').show(); //클릭 시 두 번째 요소 표시
        $ ('#yes2').show(); //클릭 시 첫 번째 요소 숨김
        $ ('#yes1').hide(); //클릭 시 첫 번째 요소 
        $ ('#yes').hide(); 
        $ ('#no1').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#no').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#no2').show(); //클릭 시 첫 번째 요소 숨김
            
        point +=10;
        return false;
        });

        $('#no').click(function(){
        $ ('#question1').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#question2').show(); //클릭 시 두 번째 요소 표시
        $ ('#question3').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#no1').show(); //클릭 시 첫 번째 요소 숨김
        $ ('#no').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#no2').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#yes2').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#yes1').show(); //클릭 시 첫 번째 요소 
        $ ('#yes').hide(); 
        point+=2;
        
        });

        $('#no1').click(function(){
        $ ('#question2').hide(); //클릭 시 첫 번째 요소 숨김
        $ ('#question3').show(); //클릭 시 두 번째 요소 표시
        $ ('#no2').show(); //클릭 시 첫 번째 요소 숨김
        $ ('#no1').hide(); //클릭 시 첫 번째 요소 
        $ ('#no').hide(); 
        $ ('#yes2').show(); //클릭 시 첫 번째 요소 숨김
        $ ('#yes1').hide(); //클릭 시 첫 번째 요소 
        $ ('#yes').hide(); 
        point+=20;
        return false;
        });
        

        $('#no2').click(function(){
            point+=200;
            result();
            return false;
        });

        $('#yes2').click(function(){
            point+=100;
            result();
            return false;
        });
        

    });
       /*
       1 2
        10 20
        100 200
       yyy : 111
       yyn: 211
       ynn: 221
       yny: 121
       nnn: 222
       nny: 122
       nyy: 112
       nyn: 212
    
       */
    function result(){
       if(point == 111){
        window.open("./추천결과P/yyy.html");
       }
       else if(point == 211){ // n n n
            window.open("./추천결과P/yyn.html");
        }
        else if(point == 221){ // n n n
            window.open("./추천결과P/ynn.html");
        }
        else if(point == 121){ // n n n
            window.open("./추천결과P/yny.html");
        }
        else if(point == 222){ // n n n
            window.open("./추천결과P/nnn.html");
        }
        else if(point == 122){ // n n n
            window.open("./추천결과P/nny.html");
        }
        else if(point == 212){ // n n n
            window.open("./추천결과P/nyn.html");
        }
        else if(point == 112){ // n n n
            window.open("./추천결과P/nyy.html");
        }
    }
        //open은 window.open("");쓰면 됨

