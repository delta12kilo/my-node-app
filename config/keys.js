
if(process.env.NODE_ENV === 'production'){
// we in production
    module,exports = require('./prod.js');

}else{
    // we in development
    module.exports = require('./dev.js');

}