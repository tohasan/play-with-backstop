module.exports = function (casper, scenario, vp) {
    casper.then(function () {
        var navLinkSelector = '.nav-link[data-action="contact"]';
        casper.waitUntilVisible(navLinkSelector, function () {
            console.log('index-hover-nav.onready.js: nav-link visible'); // NOSONAR
            casper.mouse.move(navLinkSelector);
        });
    });
    console.log('index-hover-nav.onready.js has run for: ', vp.name); // NOSONAR
};
