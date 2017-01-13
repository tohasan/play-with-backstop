module.exports = function (casper, scenario, vp) {
    casper.then(function () {
        var navLinkSelector = '.nav-link[data-action="contact"]';
        casper.waitUntilVisible(navLinkSelector, function () {
            console.log('onReady.js: nav-link visible'); // NOSONAR
            casper.mouse.move(navLinkSelector);
        });
    });
    console.log('onReady.js has run for: ', vp.name); // NOSONAR
};
