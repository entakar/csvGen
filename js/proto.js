function csvGen()
{
    console.log("IN");
    // 行数取得
    let col = document.getElementById('col').value;
    if (col == "" || col < 0) {
        return;
    }
    let inputText = document.getElementById('input-text').value;
    console.log(inputText);

    let inputFile = document.getElementById('input-file');
    console.log(inputFile);
    console.log(inputFile.files);


    let outputText = document.getElementById('output-text');
    // outputText.value = outArray;

    if (1 <= inputFile.files.length) {
        var reader = new FileReader();
        reader.onload = function (theFile) {
            var outhtml = theFile.target.result;
            // outhtml = outhtml.replace(/\r\n/g, '');
            outhtml = outhtml.split(',');
            console.log(outhtml);
            outputText.innerHTML = outhtml; // reader.result;
        }

        reader.readAsText(inputFile.files[0], "shift-jis");
    }

    // var lines = inputText.split(',');
    // // var lines = inputText.split(/\r?\n/g);
    // var outArray = new Array();
    // console.log(lines);
    // for ( var i = 0; i < lines.length; i++ ) {
    //     // 空行は無視する
    //     if ( lines[i] == '' ) {
    //         continue;
    //     }
    //     var replaceLine = lines[i].replace(/\r?\n/g, '')
    //     console.log(lines[i]);
    //     console.log(replaceLine);
 
    //     outArray.push(replaceLine);
    // }
    // console.log(lines);
    // console.log(outArray);


    // let outputText = document.getElementById('output-text');
    // outputText.value = outArray;
    // return outArray;
}