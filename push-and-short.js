#!/usr/bin/env node

const exec = require('child_process').exec;
const lecture = process.argv[2];
const secret = "";
const customShortcode = process.argv[3];
var querystring = require('querystring');
var http = require('http');


exec('git config --get remote.origin.url', function (error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    var str = `${stdout}`;

    str = str.substring(0, str.length - 5) + "/" + lecture;
    if (customShortcode) {
        PostCode(str, secret, customShortcode);
    } else {
        PostCode(str, "", "");
    }
})

function PostCode(url, secret, code) {

    var post_data = querystring.stringify({
        'url': url,
        'secret': secret,
        'code': code
    });

    var post_options = {
        host: 'cb.lk',
        path: '/api/v1/shorten',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('http://cb.lk/' + JSON.parse(chunk).shortcode);
        });
    });

    post_req.write(post_data);
    post_req.end();
}