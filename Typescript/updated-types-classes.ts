const myNum: number = 5;
const myString:string = "Hello Universe";
const myArr:number[] = [1,2,3,4];
let myObj:object = { name:'Bill'};
let anythingVariable:any = "Hey";
anythingVariable = 25; 
const arrayOne:Boolean[] = [true, false, true, true]; 
const arrayTwo:any[] = [1, 'abc', true, 2];
myObj =
{
    x: 5,
    y: 10
};
// object constructor
class MyNode  {
    val: number;
    _priv: number;
    
    constructor (valP:number) {
        this.val = 0;
        this.val = valP;
    }
    doSomething() {
        this._priv = 10;
    };
    
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}