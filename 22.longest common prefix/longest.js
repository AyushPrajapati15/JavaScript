function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }

    let prefix = strs[0]; // Initialize with the first string

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }

        prefix = prefix.slice(0, j); // Update the prefix
        if (prefix === '') {
            break; // No common prefix found
        }
    }

    return prefix;
}

// Example usage
const stringArray = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(stringArray);
console.log('Longest common prefix:', commonPrefix);
