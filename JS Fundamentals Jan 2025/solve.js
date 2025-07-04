// 20 to binary
document.body.innerHTML = `
<div id="container">
    <label for="input">Number</label>
    <input type="number" id="input"/><br>
    <label for="selectMenuFrom">From</label>
    <select id="selectMenuFrom">
        <option selected value="decimal">Decimal</option>
    </select>
    <label for="selectMenuTo">To</label>
    <select id="selectMenuTo">
        <option selected value=""></option>
    </select>
    <button>Convert it</button>
</div>
<footer>
    <label for="result">Result</label>
    <input type="text" name="output" id="result" disabled readonly/>
</footer>
`;

result();

$("#input").val("20");
$("#selectMenuTo").val("binary");
$("button").trigger("click");

let res = $("#result").val();
expect(res).to.equal("10100");