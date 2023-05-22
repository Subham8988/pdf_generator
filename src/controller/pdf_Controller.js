const path = require('path');
const ejs = require('ejs');
const pdf = require('html-pdf');


//logic pdf genrator conver ejs to pf 
const pdfMethod = async (req, res) => {
    try {
        console.time('start');
        const user ={
            name:'subham'
        }
        const homePath = path.join(__dirname,'../', 'views/pdf_content.ejs'); 
        ejs.renderFile(homePath,{user},  (err, html) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }
    
            const pdfOptions = {
                format: 'Letter',
                border: {
                    top: '1cm',
                    right: '1cm',
                    bottom: '1cm',
                    left: '1cm'
                }
            };
            
            pdf.create(html, pdfOptions).toStream((err, stream) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="invoice.pdf"');
                
                // stream.pipe(res);
                // res.download(`${stream.pipe()}`)
            });
        });
        console.timeEnd('start');
    } catch (error) {

    }
}

module.exports ={pdfMethod}