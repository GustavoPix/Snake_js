class Snake{
    constructor()
    {
        this.Reset()
    }
    
    Start()
    {
        this.size = 5;
        for(var i = this.size; i > 0; i--)
        {
            this.Add(new Vector2d(10 - i, 10));
        }
    }

    Reset()
    {
        this.locals = [];
        this.Start();
        this.dir = Vector2d.forward();
        this.size = 5;
    }
    
    Add(vector)
    {
        this.locals.push(vector);
    }

    GetPositions()
    {
        return this.locals;
    }

    Move()
    {
        var lastPosition = this.locals[this.locals.length-1];
        var shiftPosition = this.locals.shift();
        var endPosition = new Vector2d(lastPosition.x,lastPosition.y).sunToVector(this.dir);
        if(this.CheckCollider(endPosition))
        {
            Main.GameOver();
        }
        else if(Main.CheckGetDot(endPosition))
        {
            this.locals = [shiftPosition].concat(this.locals);
        }
        this.Add(endPosition);
    }

    CheckCollider(position)
    {
        if(position.x == 1 || position.x == Screen.GetLastXBlock() || position.y == 1 || position.y == Screen.GetLastYBlock())
        {
            return true;
        }
        return this.locals.find(l => position.isEqual(l));
    }

    GetScore()
    {
        return this.locals.length - this.size;
    }

    Up()
    {
        if(this.dir.y == 0)
        {
            this.dir.set(0,-1);
        }
    }
    Down()
    {
        if(this.dir.y == 0)
        {
            this.dir.set(0,1);
        }
    }
    Left()
    {
        if(this.dir.x == 0)
        {
            this.dir.set(-1,0);
        }
    }
    Right()
    {
        Main.StartGame();
        if(this.dir.x == 0)
        {
            this.dir.set(1,0);
        }
    }

}
