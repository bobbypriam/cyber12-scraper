var request = require('request');
var cheerio = require('cheerio');

request('http://cyber12.com', function (err, response, body) {
  if (err) return console.err(err);
  var $ = cheerio.load(body);
  $('.boxtitle').each(function () {
    var $this = $(this);
    var title = $this.text().trim();
    if (title === '.:: Latest Anime Release') {
      console.log(title);
      var list = $this.next();
      list.find('li a').each(function () {
        console.log($(this).text().trim());
      });
    }
  });
});
