require('./config/config');

const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());
app.options('*', cors());

app.post('/text', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.get('/convert', function(req, res) {

    let text = req.query.text;

	 if (text === undefined) {
		
        res.status(400).json({
            ok: false,
            mensaje: 'El string es necesario'
        });
	
	
}else {
	let upper = text.toString().toUpperCase();
        res.json({
            transformed: upper
        });
}
    });


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});