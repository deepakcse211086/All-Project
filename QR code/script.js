const textInput = document.getElementById('textInput');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');

let qr;

// Function to generate QR code
generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if(text === '') return alert('Please enter text or URL');

    // Clear previous QR code
    qrcodeDiv.innerHTML = '';

    // Generate new QR code
    qr = new QRCode(qrcodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});