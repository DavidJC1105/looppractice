for(let j=0; j<5; j++){
    for(let k=0; k<5; k++){
        document.write("*" );
    }
    document.write("<br/>");
}

document.write("<br/>")

for(let u=0; u<5; u++){
    for(let l=0; l<20; l++){
        document.write("*" );
    }
    document.write("<br/>");
}

document.write("<pre>");
let b = Number(prompt("enter the number of rows"));
let c = b
for(let j = 0; j<b; j++){
    for(let k = 0; k<c; k++){
        if(j==0){
        document.write("*");
        }else if(j==b-1){
        document.write("*");
        }else{
        if(k==0||k==c-1){
        document.write("*");
        }else{
        document.write(" ");
        }
      }    
    }
    document.write("<br />");
}
document.write("<pre/>")