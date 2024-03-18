const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Define o header da resposta
    res.setHeader('Content-Type', 'text/html');

    // Verifica o URL requisitado
    const requestedUrl = req.url;
    let filePath = './html_pages' + (requestedUrl === '/' ? '/index.html' : requestedUrl) ;
    /* let filePath;
if (requestedUrl === '/') {
    filePath = './html_pages/index.html';
} else {
    filePath = './html_pages' + requestedUrl;
} */
    
    // Verifica se o arquivo requisitado existe
    fs.readFile(filePath, (err, data) => {
        if(err){
            // Se ocorrer um erro ao ler o arquivo, retorna a página de erro 404
            if (err.code === 'ENOENT') {
                filePath = './html_pages/error404.html'; // Define o caminho da página de erro 404
                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        // Se houver um erro ao ler a página de erro 404, encerra a resposta sem enviar conteúdo
                        res.writeHead(404);
                        res.end();
                    } else {
                        // Envia a página de erro 404
                        res.writeHead(404, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.end();
                    }
                });
            } else {
                // Se ocorrer um erro diferente de "não encontrado", encerra a resposta sem enviar conteúdo
                res.writeHead(500);
                res.end();
            }
        } else {
            // Se o arquivo for lido com sucesso, envia o conteúdo
            res.write(data);
            res.end();
        }
    });
});

server.listen(3001, 'localhost', () => {
    console.log('Servidor iniciado.');
});
