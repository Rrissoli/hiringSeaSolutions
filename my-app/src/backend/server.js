const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.get('/usuarios', (req, res) => {
    const usuarios = router.db.get('usuarios').value();
    res.json(usuarios);
});
server.post('/usuarios', (req, res) => {
    const novoUsuario = req.body; 
    router.db.get('usuarios').push(novoUsuario).write(); 
    res.status(201).json(novoUsuario); 
  });

server.use(router);


server.listen(3001, () => {
    console.log('Servidor JSON Server está rodando na porta 4000');
});
