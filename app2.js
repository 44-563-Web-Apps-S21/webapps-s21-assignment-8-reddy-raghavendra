const http = require('http') //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1' //get our ip address from the environment
const port = process.env.port || 3001 //and the port

const server =
    http.createServer( //Creates the response loop
        (req, res) => { //Anonymous function to handle the request
            res.statusCode = 200 //code for OK
            res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

            res.write('<html> <head> <title> Server </title> </head>')
            res.write('<body>')
            res.write('<table border="1px"><tr><th>Location name</th><th>Number of hours</th><th>Money Required</th>');
            res.write('</tr><tr><td>Kodagu</td><td>36</td><td>200$</td></tr><tr><td>Gokarna</td><td>8</td><td>50$</td>');
            res.write('</tr><tr><td>Bangalore</td><td>20</td><td>100$</td>');
            res.write('</tr><tr><td>Mysore</td><td>20</td><td>150$</td></tr><tr><td>Hampi</td><td>12</td><td>100$</td></tr><tr><td>')
            res.write('Chickmaglur</td><td>12</td><td>60$</td></tr></table>');
            res.end('</body></html>')
                //Close the response
        }
    )

server.listen(port, hostname, () => { //Start the server
    console.log(`Server running at http://${hostname}:${port}/`) //Log the request
})