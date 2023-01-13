// create a multiplication grid

function MultiplicationGrid (row=3,column=3){
    for (let i = 1; i <=row; i++) {
        let rowofNumbers= [];
        for (let j = 1; j <=column; j++) {
            rowofNumbers.push(i*j);
            
        }
        console.log(rowofNumbers);
    }

}

MultiplicationGrid();