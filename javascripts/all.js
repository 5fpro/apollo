// This is where it all goes :)
if (window.location.protocol != 'https:' && window.location.port == '') {
  window.location = window.location.toString().replace(/^http:/, "https:");
}
