document.addEventListener("DOMContentLoaded", ():void=>{
    const allSquares = document.querySelector("#allSquares");

    const addSquare = (background:string):void=>{
        const div = document.createElement("div");
        div.classList.add("card");
        div.style.background = background;
        if (allSquares)allSquares.append(div);
    }

    const squareAmount = Number(prompt("How many squares would you like: "));
    for (let i = 0; i < squareAmount; i++){
        let br = document.createElement("br");
        for (let j = 0; j < squareAmount; j ++){
            if ((i + j) % 2 !==0){
                addSquare("white");
            }else{
                addSquare("black");
            }
        }
        if (allSquares)allSquares.append(br);
    }

})