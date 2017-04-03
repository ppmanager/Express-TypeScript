import app from './app/Application'
import config from './app/Configuration'

app.match('get', '/', (req, res) => {
    res.send('<html><head></head><body>hello!</body></html>');
})
app.get('/:name', (req, res) => {
    res.send('<html><head></head><body>hello ' + req.params.name + '!</body></html>');
})

app.run(config.port, () => {
    console.log(' [o] Started on port ' + config.port + '.');
})
