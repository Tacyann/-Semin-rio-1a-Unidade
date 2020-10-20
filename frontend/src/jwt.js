const crypto = require('crypto');

const header = JSON.stringify({
    'alg': '4dd907bb208dc7dab3c57ed59162c857f919e36185d3c1eebb62447806fef3dc',
    'typ': 'JWT'
});

const payload = JSON.stringify({
    'email': 'tacyblpimentel@gmail.com',
    'password': 'T@cy@nne0622'
});

const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
const secret = 'my-custom-secret';

const data = base64Header + '.' + base64Payload;

const signature = crypto
    .createHmac('sha256', secret)
    .update(data)
    .digest('base64');

const signatureUrl = signature
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')

console.log(signatureUrl);