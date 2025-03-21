function reverseString(str) {
    let leftHalf = str
        .slice(0, str.length / 2)
        .split(``)
        .reverse()
        .join(``);
    let rightHalf = str
        .slice(str.length / 2)
        .split(``)
        .reverse()
        .join(``);

    console.log(leftHalf);
    console.log(rightHalf);



}
reverseString('tluciffiDsIsihTgnizamAoSsIsihT')