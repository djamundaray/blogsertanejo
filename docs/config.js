/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "my-site-name",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "zuixjs.github.io": {
      "baseUrl": "/news-blog/",
      "resourcePath": "/news-blog/app/",
      "libraryPath": {
        "@lib": "/news-blog/lib/1.1/",
        "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
        "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
      }
    },
    "siteMapUrl": "https://zuixjs.github.io/news-blog",
    "subtitle": "A new awesome website!"
  });
})();
