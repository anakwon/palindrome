var isPalindrom = function(x) {
    if( x < 0 ) { return false; }

    let int = x.toString();
    let i = 0; 
    let j = int.length - 1; 

    while ( i <= j) {
        if (!(int[i++] === int[j--])){
            return false;
        }
        return true;
    }
}

isPalindrom(1001);