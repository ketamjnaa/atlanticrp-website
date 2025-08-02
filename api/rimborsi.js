export default function handler(req, res) {
  res.writeHead(302, { Location: '/rimborsi.html' }); // reindirizza al file statico servito
  res.end();
}
