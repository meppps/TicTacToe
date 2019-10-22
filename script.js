  
  // Match cells to variables

   var cell1 = document.getElementById('cell1');
   var cell2 = document.getElementById('cell2');
   var cell3 = document.getElementById('cell3');
   var cell4 = document.getElementById('cell4');
   var cell5 = document.getElementById('cell5');
   var cell6 = document.getElementById('cell6');
   var cell7 = document.getElementById('cell7');
   var cell8 = document.getElementById('cell8');
   var cell9 = document.getElementById('cell9');

  // Run Game
   function runGame(){
        var gameRunning = true;

        // var currentPlayer = 'X';

        var player1 = 'X';
        var player2 = 'O';

        let player = 'X';
        

        function switchPlayerX(){
        switch(player){
            case 'X':
                player = 'O';
                break;
                        }           
        }

        function switchPlayerO(){
            switch(player){
                case 'O':
                   player = 'X';
                   
            }
        }


        function takeTurn(e){
            e.target.innerHTML = player;
            if(player = 'X'){
            switchPlayerX();
            } 
            if(player = 'O'){
                switchPlayerO();
            }
            
        }
        

       // Cell click functionality 
       cell1.addEventListener('click', takeTurn);
       cell2.addEventListener('click', takeTurn);
       cell3.addEventListener('click', takeTurn);
       cell4.addEventListener('click', takeTurn);
       cell5.addEventListener('click', takeTurn);
       cell6.addEventListener('click', takeTurn);
       cell7.addEventListener('click', takeTurn);
       cell8.addEventListener('click', takeTurn);
       cell9.addEventListener('click', takeTurn);

       
   

    
   }

   runGame();