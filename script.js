function csvToJson(csv) {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(",");

        headers.forEach((header, index) => {
            obj[header.trim()] = currentLine[index].trim();
        });

        result.push(obj);
    }

    return JSON.stringify(result, null, 2);
}

function convertCsvToJson() {
    const csvInput = document.getElementById("csvInput").value;
    const jsonOutput = csvToJson(csvInput);
    document.getElementById("jsonOutput").innerText = jsonOutput;
}

function copyToClipboard() {
    const jsonOutput = document.getElementById("jsonOutput");
    const range = document.createRange();
    range.selectNodeContents(jsonOutput);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        alert('Copied to clipboard');
    } catch (err) {
        alert('Failed to copy');
    }

    selection.removeAllRanges();
}