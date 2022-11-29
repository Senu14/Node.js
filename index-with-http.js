import http from 'http'
// res, req are objects containing information about our response.

http.createServer((req, res) => {
	const value = 10
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write(`Hello world: ${value}`)
	res.end()
}).listen(4000)