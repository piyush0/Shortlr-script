/**
 * Created by piyush0 on 26/05/17.
 */

const exec = require('child_process').exec;
const secret = ""; // Add your secret
const querystring = require('querystring');
const http = require('http');


if (process.argv[2] !== '-s') {
    const customShortcode = process.argv[5];
    const directory = process.argv[4];
    let remote = null;
    let branch = null;
    if (process.argv[2]) {
        remote = process.argv[2];
    } else {
        remote = 'origin';
    }
    if (process.argv[3]) {
        branch = process.argv[3];
    } else {
        branch = 'master';
    }

    exec('git config --get remote.' + remote + '.url', function (error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        let str = `${stdout}`;
        if (directory) {
            str = str.substring(0, str.length - 5) + "/" + "tree/" + branch + "/" + directory;
            PostCode(str, secret, customShortcode);
        }
        else {
            PostCode(str, secret, customShortcode);
        }

        exec('git push ' + remote + ' ' + branch, function (error, stdout, stderr) {

            let s = `${stdout}`;
            console.log(s);
        })
    });

} else {
    let remote = null;
    if (process.argv[3]) {
        remote = process.argv[3];
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
    });

}

function PostCode(url, secret, code) {

    let post_data = querystring.stringify({
        'url': url,
        'secret': secret,
        'code': code
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
