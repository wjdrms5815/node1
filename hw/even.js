let a = new Array(100);

    for(let i=0; i<=a.length; i++){
        a[i] = Math.floor(Math.random()*100+1);}

       
    for(let i=0; i<=100; i++){
        if(a[i]%2==0)
        a.splice(i,1)}
    console.log(a);