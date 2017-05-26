#!/usr/bin/env node

const exec = require('child_process').exec;
const querystring = require('querystring');
const http = require('http');
let remote = null;
if (process.argv[2]) {
    remote = process.argv[2];
} else {
    remote = 'origin';
}
exec('git config --get remote.' + remote + '.url', function (error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    let str = `${stdout}`;
    PostCode(str);
    console.log(str);
});


function PostCode(url) {

    let post_data = querystring.stringify({
        'url': url,
        'secret': "",
        'code': ""
    });

    let post_options = {
        host: 'cb.lk',
        path: '/api/v1/shorten',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    let post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('http://cb.lk/' + JSON.parse(chunk).shortcode);
        });
    });

    post_req.write(post_data);
    post_req.end();
}
