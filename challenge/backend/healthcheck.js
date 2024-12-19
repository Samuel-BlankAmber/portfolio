const https = require('https');

const options = {
    hostname: 'localhost',
    port: 5000,
    rejectUnauthorized: false,
};

function httpsGet(path, headers = {}) {
    return new Promise((resolve, reject) => {
        const req = https.request({ ...options, path, method: 'GET', headers }, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve({ statusCode: res.statusCode, data }));
        });
        req.on('error', reject);
        req.end();
    });
}

async function healthCheck() {
    try {
        const { statusCode, data } = await httpsGet('/api/reindeer?filter=|');
        if (statusCode === 200) {
            if (data.includes('KAINOS{3v3n_r3g3x_c4n_b3_d4ng3r0u5}')) {
                console.log("Healthcheck passed")
                process.exit(0)
            } else {
                console.log("Healthcheck failed: flag not found")
                process.exit(1)
            }
        } else {
            console.log(`Healthcheck failed with status code: ${statusCode}`);
            process.exit(1);
        }
    } catch (error) {
        console.error(`Healthcheck failed: ${error.message}`);
        process.exit(1);
    }
}

healthCheck();

