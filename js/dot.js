class Dot{
    constructor()
    {
        this.local = this.NewPosition();
    }

    RandomNumber(min,max)
    {
        var aux = Math.floor(Math.random() * max);
        if(aux < min)
        {
            aux = min;
        }
        else if(aux > max)
        {
            aux = max;
        }
        return aux;
    }

    GetPosition()
    {
        return this.local;
    }

    NewPosition()
    {
        let aux = new Vector2d(this.RandomNumber(2, Screen.GetLastXBlock() - 1), this.RandomNumber(2, Screen.GetLastYBlock()));
        return !Main.CheckPositionsSnake(aux) ? aux : this.NewPosition();
    }

    GetDot()
    {
        var aux = new Vector2d(this.local.x, this.local.y);
        this.local = this.NewPosition();
        return aux;
    }
}