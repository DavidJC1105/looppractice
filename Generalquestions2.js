
let a=Number(prompt("Enter a number"))
let b=a
console.log(a)
let c=0;
for(;a>0;){
    a=Math.floor(a/10);
    c++
}
console.log(c);

let f=0
let g=b
let e=0

for(;g>0;){
    f=g%10
    g=Math.floor(g/10);
    e=e+(f**c)
}
if(b==e){
    console.log("This is an Armstrong number",b,"-",e)
}
else{console.log("This is not an Armstrong number")}



let y=Number(prompt("Enter a number"))
let x=y
console.log(y)
let z=0
for(;y>0;){
    y=Math.floor(y/10);
    z++
}
console.log(z)

let h=x
let o=0
let j=0
let factorial=1
let total=0

for(;h>0;){
    j=h%10
    h=Math.floor(h/10);
    for (let m=j;m>0;m--){
        factorial=factorial*m
    }
    total=total+factorial
    factorial=1
}
if(total==x){
    console.log("This is a strong number")
}
else{console.log("This is not a strong number",total,y)}



let u=Number(prompt("Enter a number"))
console.log(u)
let s=u
let v=0
let reverse=0

for(;u>0;){
    s=u%10
    u=Math.floor(u/10)
    reverse=reverse+s
    reverse=reverse*10
    s=0
}
reverse=Math.floor(reverse/10)
console.log(reverse)
