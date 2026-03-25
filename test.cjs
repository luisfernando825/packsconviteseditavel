const https = require('https');
https.get('https://external-content.duckduckgo.com/iu/?u=https://i.imgur.com/89tiBQY.jpg', (res) => {
  console.log(res.statusCode);
  console.log(res.headers['content-type']);
});
