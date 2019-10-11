const withCSS = require('@zeit/next-css');console.log(__dirname);
module.exports = withCSS({
    exportPathMap: function () {
            return {
              '/': { page: '/' }
              };
        }
    });
const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: '</>',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});