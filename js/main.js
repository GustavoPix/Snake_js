(function Main(){

    window.Main = {
        GameOver:GameOver,
        CheckGetDot:CheckGetDot,
        CheckPositionsSnake:CheckPositionsSnake,
        StartGame:StartGame
    }
    
    var snake = new Snake();
    var dot = new Dot();
    var gameOn =  true;
    var gameStart = false;
    var tela = document.querySelector("canvas");

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
        Screen.ClearScreen();
        var pieceDot = dot.GetPosition();
        var piecesSnake = snake.GetPositions();
        
        piecesSnake.forEach(p => {
            Screen.DrawInPoint(p.x,p.y);
        });
        //Screen.DrawInPoint(pieceDot.x,pieceDot.y);
        Screen.Drawpoint(pieceDot);
        if(gameOn)
        {
            if(gameStart)
            {
                snake.Move();
            }

            if(!gameStart)
            {
                var local = Screen.GetScreenSize();
                local.x = local.x / 2;
                local.y = local.y / 2;
                Screen.DrawText("Pressione -> para começar",local);
            }
        }
        else
        {
            var local = Screen.GetScreenSize();
            local.x = local.x / 2;
            local.y = local.y / 2;
            Screen.DrawText("Game Over", local);
            local.y += 25;
            Screen.DrawText(`Score: ${snake.GetScore()}`, local);
            local.y += 25;
            Screen.DrawText("Clique aqui para jogar novamente", local);
        }
    }

    function CheckGetDot(vec)
    {
        if(vec.isEqual(dot.GetPosition()))
        {
            var aux = dot.GetDot();
            return true;
        }
        return false;
    }

    function CheckPositionsSnake(vec)
    {
        return snake.GetPositions().find(p => p.isEqual(vec)) ?  true : false;
    }

    function GameOver()
    {
        gameOn = false;
        //alert("Game Over!");
    }
    function StartGame()
    {
        if(gameOn)
        {
            gameStart = true;
        }
    }
    function ResetGame()
    {
        if(!gameOn)
        {
            gameOn = true;
            gameStart = false;
            snake.Reset();
            dot.NewPosition();
        }
    }

    Start();

    tela.addEventListener("click",function(e){
        ResetGame();
    });
    
})()