function multiply()
{
    a = Number(document.getElementById('quantity').value);
    itemname = document.getElementById('item').value;

    let b
console.log("yes")
    switch(itemname){
        case "blkdress":
        b=50 
        break;
        case "watch":
        b=120 
        break;
        case "woman jeans":
        b=30
        break;
        case "Men Jeans":
        b=30
        break;
        case "men shoes":
        b=20
        break;
        case "necklace":
        b=200
        break;
        case "mens suit":
        b=150
        break;
        case "heels":
        b=60
        break;
        case "red dress":
        b=70
        break;
        case "woman's shirt":
        b=30
        break;
        case "men's shorts":
        b=20
        break;
        case "men's shirt":
        b=50
        break;
        default: 
        b=0;
        break;
    }     
    c = a*b;
console.log(c)
    document.getElementById('totalprice').textContent=c;
}