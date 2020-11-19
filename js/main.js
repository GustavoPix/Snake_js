(function Main(){
    
    var snake = new Snake();
    var gameOn =  true;

    function Start(){
        setInterval(function(){
            
            Update();
        },100);

        window.addEventListener("keydown",function(e){
            console.log(`keycode ${e.key}`);
            switch(e.key)
            {
                case "ArrowUp":
                    snake.Up();
                    break;
                case "ArrowDown":
                    snake.Down();
                    break;
                case "ArrowLeft":
                    snake.Left();
                    break;
                case "ArrowRight":
                    snake.Right();
                    break;
                default:
                    break;
            }
        });
    }

    function Update()
    {
        if(gameOn)
        {
            snake.Move();
            Screen.ClearScreen();
            var piecesSnake = snake.GetPositions();
            
            piecesSnake.forEach(p => {
                Screen.DrawInPoint(p.x,p.y);
            });
        }
    }

    function GameOver()
    {
        gameOn = false;
        alert("Game Over!");
    }

    Start();

    window.Main = {
        GameOver:GameOver
    }
    
})()