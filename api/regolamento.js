export default function handler(req, res) {
  res.writeHead(302, { Location: '/regolamento.html' }); // reindirizza al file statico servito
  res.end();
}
