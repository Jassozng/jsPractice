window.onload = () => {
    const submitButton = document.getElementById("solve");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const aValue = document.getElementById("aValue").value;
        const bValue = document.getElementById("bValue").value;
        const cValue = document.getElementById("cValue").value;
        const resultContainer = document.getElementById("ecuationResult");
        const result = ecuationSolver(parseInt(aValue), parseInt(bValue), parseInt(cValue));
        resultContainer.innerHTML = "";
        resultContainer.innerHTML = 
        `
        <h1 class="ecuationResult">The result is</h1><br>
        <h2 class="ecuationResult">${result}</h2>
        `;
    });
};

function ecuationSolver(a, b, c){
    let sqrtSolve = 0;
    let isImaginary = false;
    let squareSolve = (Math.pow(b, 2) - (4*a*c));
    if(squareSolve < 0) { squareSolve = Math.abs(squareSolve) ; isImaginary = true; };
    sqrtSolve = Math.sqrt(squareSolve);
    const solution = (b + sqrtSolve)/(2*a);
    let finalExpresion = isImaginary ? solution + ("±"+ (sqrtSolve + b) +"i") : solution + ("±"+ (sqrtSolve + b));
    return finalExpresion;
};