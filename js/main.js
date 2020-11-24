(function Main(){

    window.Main = {
        GameOver:GameOver,
        CheckGetDot:CheckGetDot,
        CheckPositionsSnake:CheckPositionsSnake
    }
    
    var snake = new Snake();
    var dot = new Dot();
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
            var pieceDot = dot.GetPosition();
            var piecesSnake = snake.GetPositions();
            
            piecesSnake.forEach(p => {
                Screen.DrawInPoint(p.x,p.y);
            });
            //Screen.DrawInPoint(pieceDot.x,pieceDot.y);
            Screen.Drawpoint(pieceDot);
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
        alert("Game Over!");
    }

    Start();

    
    
})()