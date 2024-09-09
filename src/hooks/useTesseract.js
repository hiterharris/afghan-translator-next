const Tesseract = require("tesseract.js");
const fs = require('fs');

const imagePath = '../assets/uploads/bill.png';

const useTesseract = async () => {
        try {
          const { data: { text } } = await Tesseract.recognize(imagePath, "eng", {
            logger: (m) => console.log(m), 
          });
          console.log("Extracted Text:", text);
      
          fs.writeFile('text.txt', text, (err) => {
            if (err) {
              console.error('Error writing to file:', err);
            } else {
              console.log('Extracted text saved to text.txt');
            }
          });
        } catch (error) {
          console.error("Error performing OCR:", error);
        }
}


useTesseract();
