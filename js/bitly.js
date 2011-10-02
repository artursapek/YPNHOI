function shorten(url) {
  call = "http://api.bitly.com/v3/shorten?callback=?"
  jQuery.getJSON(call,
    {'login': 'ypnhoi',
    'apiKey': 'R_c70ca864bac81d13cd6a79901af7429e',
    'longurl': url,
    'format': 'json'},
  function(resp) {
    user.bitly = [resp.data.url, resp.data.url+".qrcode"];
  });
}
shorten("http://www.yelp.com");
