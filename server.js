const express = require('express')

const app = express()

app.use((req, res, next) => {
  var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
  console.log(22,requestedUrl)
  next()
})
app.use(express.static('./docs/dist', { maxAge: '1y', etag: false }))

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 2345
module.exports = app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}, Ctrl+C to stop`)
})
