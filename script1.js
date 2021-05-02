/*
this is the 1st attempt in building the javascript for etch-a-sketch 
in an attempt to test out my second way by using the eventlisener for the button clickes
inside the if statement and write out the color change functions individually 

*/

// define grid box container
const divGridContainer = document.querySelector(".divGridContainer");

//define gridSize indicator
const gridSize = document.querySelector(".gridSize");

//define button
const colorBlack = document.querySelector("#colorBlack");
const colorGrey = document.querySelector("#colorGrey");
const colorCustom = document.querySelector("#colorCustom");
const eraser = document.querySelector("#eraser");
const restart = document.querySelector("#restart");
const colors = document.querySelectorAll(".colors")



//function for default size
window.addEventListener("load", gridSizeApply);
function gridSizeApply(){
    createGrid(16,16);
}



//function for create grid and making selection for the paint colors to add
function createGrid(rows, columns){
    for (i=0; i<(rows*columns); i++){
        let cell = document.createElement('div');
        cell.textContent="";
        cell.classList.add('cells')
        cell.style.backgroundColor = 'white';
        divGridContainer.appendChild(cell);
        divGridContainer.style.setProperty('--rows', rows);
        divGridContainer.style.setProperty('--columns', columns);

        colors.forEach(selection=>selection.addEventListener('click', colorSelection));

        function colorSelection(e){
            let colorSelect = e.target;

            if(colorSelect === colorGrey){
                colorChangeGray(cell);
            }
            else if (colorSelect === colorBlack){
                colorChangeBlack(cell);
            }
            else if (colorSelect === eraser){
                colorChangeWhite(cell);
            }
            else if (colorSelect = colorCustom){
                colorRandom(cell);  
            }
        }
    }
}




//function for adding black paint color as mouse hovers over the cells.
function colorChangeBlack(cell){
    cell.addEventListener('mouseover', changeColor)
        function changeColor(){
            cell.style.background= 'black';
           
}
}


//function for adding white(eraser) paint color as mouse hovers over the cells.
function colorChangeWhite(cell){
    cell.addEventListener('mouseover', changeColor)
        function changeColor(){
            cell.style.background= 'white';
            
}
}


//function for adding random paint color 
function colorRandom(cell){
    cell.addEventListener('mouseover', changeColor)
        function changeColor(){
            color = Math.floor(Math.random()*16777215).toString(16);
            cell.style.background=`#${color}`;
           
}
}


//function for adding grey scale paint at 10% rate until black
function colorChangeGrey(cell){
    cell.addEventListener('mouseover', changeColorGrey)
        function changeColorGrey(){
        cell.style.backgroundColor="grey";
}
}


function clearGrid() {
    const gridArray = Array.from(divGridContainer.childNodes);

    gridArray.forEach(function(element){
    divGridContainer.removeChild(element);
    });

  }




//function for restarting30
restart.addEventListener("click", gameRestart)
    function gameRestart(){
        gridNum=prompt("what grid size do you want to have?");

        if (gridNum >= 2){
            clearGrid() 
            createGrid(gridNum,gridNum);
            gridSize.textContent=`Grid Size: ${gridNum} X ${gridNum}`

        } 
        else if (gridNum = isNaN || gridNum <=1 || gridNum == undefined){
            alert("Enter a Number or a Number Thats Greater Than 1");
    }
}