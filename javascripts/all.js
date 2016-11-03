// This is where it all goes :)
if (window.location.protocol != 'https:' && window.location.port == '80') {
  window.location = window.location.toString().replace(/^http:/, "https:");
}
