(function Screen(){
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    var screenWidth = 360;
    var screenHeight = 360;
    var bloco = 10;
    var colors = {
        background:"#1F1F1F",
        main:"#BFBFBF",
        secondary:"#8C8C8C"
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
    function DrawInPoint(x,y,secondary = false)
    {
        DrawRect(new Vector2d(x*bloco,y*bloco),bloco,bloco,secondary ? colors.secondary : colors.main,colors.background);
    }
    function Drawpoint(vec, secondary = false)
    {
        var color = secondary ? colors.secondary : colors.main;
        DrawRect(new Vector2d(vec.x * bloco, vec.y * bloco + bloco / 3),bloco / 3, bloco / 3, color, colors.background);
        DrawRect(new Vector2d(vec.x * bloco + bloco / 3, vec.y * bloco),bloco / 3, bloco / 3, color, colors.background);
        DrawRect(new Vector2d(vec.x * bloco + (bloco / 3 * 2), vec.y * bloco + bloco / 3),bloco / 3, bloco / 3, color, colors.background);
        DrawRect(new Vector2d(vec.x * bloco + bloco / 3, vec.y * bloco + (bloco / 3 * 2)),bloco / 3, bloco / 3, color, colors.background);
    }
    function GetLastXBlock()
    {
        return (screenWidth - (bloco * 2)) / bloco;
    }
    function GetLastYBlock()
    {
        return (screenHeight - (bloco * 2)) / bloco;
    }
    function GetScreenSize()
    {
        return new Vector2d(screenWidth,screenHeight);
    }

    function DrawText(text,position)
    {
        pincel.font = "30px VT323";
        pincel.fillStyle = colors.main;
        pincel.textAlign = "center";
        pincel.strokeStyle = colors.background;
        pincel.strokeText(text,position.x,position.y);
        pincel.fillText(text,position.x,position.y);
    }
    
    window.Screen = {
        DrawRect:DrawRect,
        DrawCircle:DrawCircle,
        ClearScreen:ClearScreen,
        DrawInPoint:DrawInPoint,
        GetLastXBlock:GetLastXBlock,
        GetLastYBlock:GetLastYBlock,
        Drawpoint:Drawpoint,
        DrawText:DrawText,
        GetScreenSize:GetScreenSize
    }
})();