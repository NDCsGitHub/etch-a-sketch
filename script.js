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



//function for create grid and adding eventlisener for each cell
function createGrid(rows, columns){

    for (i=0; i<(rows*columns); i++){
        let cell = document.createElement('div');
        cell.textContent="";
        cell.classList.add('cells')
        cell.style.backgroundColor = 'white';
        divGridContainer.appendChild(cell);
        divGridContainer.style.setProperty('--rows', rows);
        divGridContainer.style.setProperty('--columns', columns);
    }

const eachCell = divGridContainer.querySelectorAll("div");
eachCell.forEach(singleCell => singleCell.addEventListener('mouseover', colorChange));
}



//function for eachCell's eventListener "mouseover"
function colorChange(e){

    let color = Math.floor(Math.random()*16777215).toString(16);

    if (colorSelected === "gray"){
        e.target.style.backgroundColor = "gray";
    }
    else if (colorSelected === "black"){
        e.target.style.backgroundColor="black";
    }
    else if (colorSelected === "eraser"){
        e.target.style.backgroundColor="white"
    }
    else if (colorSelected ==="random") 
        e.target.style.background=`#${color}`;
}



//function for adding eventListener for the color options buttons
colors.forEach(selection=>selection.addEventListener('click', colorSelection));
let colorSelected='';
function colorSelection(e){
    let colorSelect = e.target;
    
    if(colorSelect === colorGrey){
        colorSelected = "gray"
        buttonAnimation(colorSelect);
    }
    else if (colorSelect === colorBlack){
        colorSelected = "black"
        buttonAnimation(colorSelect);
    }
    else if (colorSelect === eraser){
        colorSelected = "eraser"
        buttonAnimation(colorSelect);
    }
    else if (colorSelect = colorCustom){
        colorSelected = "random"
        buttonAnimation(colorSelect);
    }    
}



//function for adding new button animation and remove the previous one
function buttonAnimation(button){
    colors.forEach(item => item.classList.remove('buttonAnimation'));
    button.classList.add('buttonAnimation')
}



//function for clearout the current grid, this is needed so the loop doesnt add new grid cell on top of the current cells
function clearGrid() {
    const gridArray = Array.from(divGridContainer.childNodes);
    gridArray.forEach(function(element){
    divGridContainer.removeChild(element);
    });
  }


//function for restarting and resizing using the resize button
restart.addEventListener("click", gameRestart)

    function gameRestart(){
        colors.forEach(item => item.classList.remove('buttonAnimation'));
        colors.forEach(selection=>selection.removeEventListener('click', colorSelection));
        gridNum=prompt("what grid size do you want to have?");

        if (gridNum >= 2){
            colors.forEach(selection=>selection.addEventListener('click', colorSelection));
            clearGrid() 
            createGrid(gridNum,gridNum);
            gridSize.textContent=`Grid Size: ${gridNum} X ${gridNum}`
        } 
        else if (gridNum = isNaN || gridNum <=1 || gridNum === undefined){
            alert("Enter a Number or a Number Thats Greater Than 1");
    }
}