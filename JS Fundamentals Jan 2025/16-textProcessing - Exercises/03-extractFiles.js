function extractFiles(path) {
    /** @type {string} */
    let file = path
        .split(`\\`)
        .pop()
        ;



    let indexOfExtension = file.lastIndexOf(".")
    let fileName = file.slice(0, indexOfExtension);
    let extension = file.slice(1 + indexOfExtension);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);


}
extractFiles('C:\\Internal\\training-internal\\Template.pptx')

