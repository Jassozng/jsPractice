//font-family: Symbola-mq,"Times New Roman",serif;

function ecuationSolver(a, b, c){
    let sqrtSolve = 0;
    let isImaginary = false;
    let squareSolve = (Math.pow(b) - (4*a*c));
    if(squareSolve < 0) { squareSolve = squareSolve + squareSolve; isImaginary = true; };
    sqrtSolve = Math.sqrt(squareSolve);
    return (b + sqrtSolve)/(2*a);
}   