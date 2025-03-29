function fancyBarcode(arr) {
    let barcodeCount = arr[0];
    let pattern = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/;
    for (let i = 1; i < arr.length; i++) {
        let match = arr[i].match(pattern);
        if (match) {
            let barcode = Array.from(match)[0]
            let productGroup = barcode.match(/[0-9]/g);
            if (productGroup) {
                productGroup = productGroup.join(``)
            } else {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);


        } else {
            console.log(`Invalid barcode`);

        }
    }
}
fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
