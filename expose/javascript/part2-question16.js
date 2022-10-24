for (const prop in statistics) {
    if((`${statistics[prop]}` % 2) == 1 || prop.substring(0, 1) == 'r') 
        console.log(`${statistics[prop]}`);
}