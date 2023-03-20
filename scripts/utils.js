function axiosProgress(progressEvent) {
    const total = parseFloat(progressEvent.total);
    const current = progressEvent.loaded;
    if (total == NaN) 
        return
    
    let percentCompleted = Math.floor(current / total * 100)
    let progressBar = Math.floor(current / total * 25)
    updateState("Downloading archive " + percentCompleted + "%", 25 + progressBar);
}


function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// create div from key and value for title and description
// add ID to the div
function createDiv(customID, name, data) { // create a new div element
    const div = document.createElement('div');
    // add divdata class to the div
    div.classList.add('divdata');

    // add custom id for the div
    div.id = customID;

    // add the name and data to the div
    div.innerHTML = `<strong>${
        name.toUpperCase()
    }</strong><br> ${data}`;

    // return the div
    return div;
}


// function to sha256 hash
async function digestMessage(input) {
    try {

        const hashBuffer = await crypto.subtle.digest('SHA-256', input); // hash the input
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    } catch (error) {
        console.log(error);
    }
}
