// This is where it all goes :)
if (window.location.protocol != 'https:' && window.location.port == '') {
  if(window.location.host.indexOf('staging') == -1 && window.location.host.indexOf('localhost') == -1) {
    window.location = window.location.toString().replace(/^http:/, "https:");
  }
}
