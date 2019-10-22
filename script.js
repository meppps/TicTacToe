  
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

        // var player1 = 'X';
        // var player2 = 'O';

        let player = 'X';

        
        // Alternate Players
        function switchPlayer(){
        switch(player){
            case 'X':
                player = 'O';
                break;
            case 'O':
                player = 'X';
                break;
                        };                        
        };

        
 
        function takeTurn(e){

            if(e.target.innnerHTML == null){
            e.target.innerHTML = player;
            // console.log(e.target.innerHTML)
            switchPlayer();
    
            }else if(e.target.innerHTML = 'O'){
                console.log('hi')
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

       // Cell readings 
    //    cell1.addEventListener('click', checkForWin);
       
   

    
   }

   runGame();