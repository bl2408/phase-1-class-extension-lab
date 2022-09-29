// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((ps, cs)=> ps + cs);
    }
}

class Triangle extends Polygon{
    get isValid (){
        const sides = this.sides;
        const point = {
            zeroOne: sides[0] + sides[1],
            oneTwo: sides[1] + sides[2],
            zeroTwo: sides[0] + sides[2],
        }

        return point.zeroOne >= sides[2] 
        && point.oneTwo >= sides[0] 
        && point.zeroTwo >= sides[1];
    }
}

class Square extends Polygon{
    get isValid (){

        let isVal = true

        this.sides.forEach(side => {
            if(side !== this.sides[0]){
                isVal = false;
                return;
            }
        });

        return isVal;
    }

    get area(){
        return this.sides[0] * this.sides[1];
    }
}

console.log(new Square( [ 5, 4, 3, 2 ]).isValid);
console.log(new Square( [ 5, 5, 5, 5 ]).isValid);