exports.paginaInicial = (req, res, next) => {
    res.render('index');
}

exports.trataPost = (req, res, next) => {
    req.body.senha = '****';
    req.body.usuario = '------'
    res.send(req.body);
}
