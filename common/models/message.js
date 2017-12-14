'use strict';
module.exports = function(Message) {
  Message.greet = function(cb) {
    cb(null, 'Hello, from the other side');
  };
  Message.remoteMethod('greet', {
    accepts: [],
    returns: {
      arg: 'message',
      root: true,
      type: 'string',
    },
    http: {
      verb: 'get',
      path: '/greeting',
    },
  });
};
