var http = require("http");
var path = require("path");
var staticAlias = require("node-static-alias");

const WEB_PATH = path.join(__dirname, 'web')

var fileServer = new staticAlias.Server(WEB_PATH, {
	cache: 100,
	serverInfo: "Click Gate",
	alias: [		
		{
			match: /index.js/,
			serve: './js/index.js',
			force: true,
		},
		{  match: /index.css/,
			serve: './css/index.css',
		},
		{
			match: /\//,
			serve: "./html/index.html",
			force: true,
		},
		
	],

});

var httpServer = http.createServer(handleRequest);
main();


function main() {
	httpServer.listen(8080);
	console.log('server is listening to port 8080');
}

function handleRequest(req, res) {
  fileServer.serve(req, res);
}
