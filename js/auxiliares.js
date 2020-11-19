class Vector2d{
    
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    sunToVector(vec){
        this.x+=vec.x;
        this.y+=vec.y;
        return this;
    }
    sunTo(x,y){
        this.x+=x;
        this.y+=y;
        return this;
    }
    set(x,y)
    {
        this.x=x;
        this.y=y;
        return this;
    }
    isEqual(vec)
    {
        return this.x == vec.x && this.y == vec.y;
    }

    static zero(){
        return new Vector2d(0,0);
    }
    static one(){
        return new Vector2d(1,1);
    }
    static up(){
        return new Vector2d(0,1);
    }
    static forward(){
        return new Vector2d(1,0);
    }
    static sun(a,b){
        return new Vector2d(a.x + b.x, a.y + b.y);
    }

    
}