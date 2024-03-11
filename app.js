function rolldice(){
    const values = [];
    const images = [];

    const numofDice = document.getElementById("numOfDice").value;
    for(let i=0;i<numofDice;i++){
        const d = Math.floor(Math.random()*6)+1;
        values.push(d);
        images.push(`<img src="${d}.png" >`);
    }
    
    const diceResult = document.getElementById("diceResult");
    diceResult.textContent = `dice: ${values.join(', ')}`;
    const diceImages = document.getElementById("diceImages");
    diceImages.innerHTML= images.join('');
}