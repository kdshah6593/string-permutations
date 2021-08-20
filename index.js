// string is assumed to have only unique characters

function findAllPermutations(string) {
    if (string.length < 2) return [string]
    
    let permutationsArr = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        // if (string.indexOf(char) != i) {continue} | this line is if the string did not have only unique characters

        let remainingString = string.slice(0,i) + string.slice(i+1, string.length)
        console.log(`Char: ${char}`)
        console.log(`Remaining: ${remainingString}`)
        

        for (let permutation of findAllPermutations(remainingString)) {
            console.log(`Permutation: ${permutation}`)
            permutationsArr.push(char + permutation)
            console.log(permutationsArr)
            console.log(" ")
        }
    }

    return permutationsArr
}


// findAllPermutations("abc")
// console.log(findAllPermutations("abcd"))