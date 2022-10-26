//Question 1
//1

let a=Number(prompt("Enter a number"))
let b=a
console.log(a)
let c=0;
for(;a>0;){
    a=Math.floor(a/10);
    c++
}
console.log(b +" has "+c+" digit(s)");

//Question 2

let d=Number(prompt("Enter a number"))
console.log(d)
lastdigit=d%10
for(;d>10;){
    d=Math.floor(d/10);
}
firstdigit=d
console.log("The first digit is "+firstdigit)
console.log("The last digit is "+lastdigit)

//Question 3

let e=Number(prompt("Enter a number"))
let temp1=e
console.log(e)
let lastdigit=0
for(;e>0;){
    lastdigit=e%10
    if(lastdigit==1){
    console.log("One");
    }
    if(lastdigit==2){
        console.log("Two");
        }
    if(lastdigit==3){
        console.log("Three");
        }
     if(lastdigit==4){
        console.log("Four");
        }
    if(lastdigit==5){
        console.log("Five");
        }
    if(lastdigit==6){
        console.log("Six");
        }
    if(lastdigit==7){
        console.log("Seven");
        }
    if(lastdigit==8){
        console.log("Eight");
        }
    if(lastdigit==9){
        console.log("Nine");
        }
    if(lastdigit==0){
        console.log("Zero");
    }
        e=Math.floor(e/10)

}

//Question 4

let t=Number(prompt("Enter your first number"))
let f=Number(prompt("Enter your second number"))

max= Math.max(t, f);
for(;max/t==Math.floor(max/t)&&max/f==Math.floor(max/f)==false;){
    max=max+max
}
console.log(max+" is the lowest common multiple of "+t+" and "+f)




