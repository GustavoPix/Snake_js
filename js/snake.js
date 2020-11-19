class Snake{
    constructor()
    {
        this.locals = [];
        this.Start();
        this.dir = Vector2d.forward();
    }

    Start()
    {
        for(var i = 5; i >= 0; i--)
        {
            this.Add(new Vector2d(10 - i, 10));
        }
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
        var endPosition = this.locals.shift().set(lastPosition.x,lastPosition.y).sunToVector(this.dir);
        if(this.CheckCollider(endPosition))
        {
            Main.GameOver();
        }
        else
        {
            
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
        if(this.dir.x == 0)
        {
            this.dir.set(1,0);
        }
    }

}
