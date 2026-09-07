/* PS4 9.00 Stage 1 Payload Loader */
function loadStage1() {
    console.log("Loading Stage 1...");
    var req = new XMLHttpRequest();
    req.open('GET', 'goldhen.bin', true);
    req.responseType = 'arraybuffer';
    req.onload = function (e) {
        if (req.status == 200) {
            console.log("Payload Loaded Successfully");
        }
    };
    req.send();
}
