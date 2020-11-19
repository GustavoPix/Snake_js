(function Screen(){
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    var screenWidth = 480;
    var screenHeight = 480;
    var bloco = 10;
    var colors = {
        background:"#000000",
        main:"#ffffff"
    }

    function DrawRect(position,width,height,fill,stroke)
    {
        if(fill != null && fill != undefined)
        {
            pincel.fillStyle = fill;
            pincel.fillRect(position.x,position.y,width,height);
        }
        if(stroke != null && stroke != undefined)
        {
            pincel.strokeStyle = stroke;
            pincel.strokeRect(position.x,position.y,width,height);
        }
    }
    function DrawCircle(position, radius, color) {

        pincel.fillStyle = color;
        pincel.beginPath();
        pincel.arc(position.x, position.y, radius, 0, 2*3.14);
        pincel.fill();
    }
    function ClearScreen(){
        DrawRect(Vector2d.zero(),screenWidth,screenHeight,colors.background,null);
        
        for(var j = 0; j < screenHeight / bloco; j++)
        {
            for(var i = 0; i < screenWidth / bloco; i++)
            {
                if(i > 0 && i < (screenWidth - bloco) / bloco)
                {
                    if(j == 1 || j == (screenHeight - (bloco * 2)) / bloco)
                    {
                        DrawInPoint(i,j);
                    }
                    else if((i == 1 || i == GetLastXBlock()) && j > 0 && j < GetLastYBlock())
                    {
                        DrawInPoint(i,j);
                    }
                }
            }
        }
        
    }
    function DrawInPoint(x,y)
    {
        
        DrawRect(new Vector2d(x*bloco,y*bloco),bloco,bloco,colors.main,colors.background);
    }
    function GetLastXBlock()
    {
        return (screenWidth - (bloco * 2)) / bloco;
    }
    function GetLastYBlock()
    {
        return (screenHeight - (bloco * 2)) / bloco;
    }
    
    window.Screen = {
        DrawRect:DrawRect,
        DrawCircle:DrawCircle,
        ClearScreen:ClearScreen,
        DrawInPoint:DrawInPoint,
        GetLastXBlock:GetLastXBlock,
        GetLastYBlock:GetLastYBlock
    }
})();