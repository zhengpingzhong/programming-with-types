let counter: number = 0;

function condition(value: boolean):boolean {
    counter ++;
    return  value;
}

if (condition(false) && condition(true)){

}

console.log(counter)
