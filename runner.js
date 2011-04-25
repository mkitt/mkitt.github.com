
var exec = require('child_process').exec;


function notify(msg, growl) {
  console.log(msg);
  if (growl) {
    exec('growlnotify -name '+  growl.name + ' -m "' + growl.msg + '"');
  }
}

module.exports.init = function(watchn) {

  watchn.watch('styles', ['./app/stylesheets/'], function(options) {
    if (options.curr > options.prev) {
      exec('make css', function(error, stdout, stderr) {
        if (error !== null)
          notify(error.message, {name: 'Stylus', msg: 'Build Failed!'});
        else
          notify('styles generated');
      });
    }
  });
};

