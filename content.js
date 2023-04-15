// Wait for the page to fully load
window.addEventListener("load", function () {
    var observer = new MutationObserver(function (mutations) {
        var spans = document.querySelectorAll('span.TruncatedRichText-expand.PrimaryLinkButton');
        if (spans.length > 0) {
            console.log('See More: saved you a click');
            spans[0].click();
            return;
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
