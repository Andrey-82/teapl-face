const routes = require('next-routes');

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('node', '/node/:id', 'node');                // node   node   /node/:id
