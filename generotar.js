function* greet(){
    yield 1;
    return 3;
    yield 2;
    yield 3;
}

let g = greet()
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());




