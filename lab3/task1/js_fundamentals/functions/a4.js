function pow(a, b) {
    let c = a
    for(let i = 1; i < b; i ++) {
        a *= c;
    }
    return a;
}
