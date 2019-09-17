/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const routes = require('next-i18next');

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('node', '/node/:id', 'node');                // node   node   /node/:id
