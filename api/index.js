export default function handler(req, res) {
  res.writeHead(302, { Location: '/index.html' }); // reindirizza al file statico servito
  res.end();
}
