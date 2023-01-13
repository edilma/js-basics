
function rowOfStart(row,column){
    const rowStar = "*".repeat(column);
    for (let i = 0; i < row; i++) {
        console.log(rowStar);
        
    }
}

console.log(rowOfStart(3,4));