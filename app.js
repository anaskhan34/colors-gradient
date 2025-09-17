
function randomHex(){
    let hexValue = "0123456789ABCDEF";;
    let hash = "#";

    for(let i=0; i<6 ; i++){
        hash = hash + hexValue[Math.floor(Math.random() *16)];
    }
    return hash;
};



document.getElementById("btn").addEventListener("click", function (){
    let rgb1 = randomHex();
    let rgb2 = randomHex();

    // body background
    document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1}, ${rgb2}`;
    // p tag text
    document.getElementById("result").innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    // button color
    document.getElementById("btn").style.backgroundColor = rgb1;
    document.getElementById("btn").style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    
});

result.addEventListener("click", () => {
    navigator.clipboard.writeText(result.innerText);
    alert("your gradient is copied..")
});

