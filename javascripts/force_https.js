"https:"!=window.location.protocol&&""==window.location.port&&-1==window.location.host.indexOf("staging")&&-1==window.location.host.indexOf("localhost")&&(window.location=window.location.toString().replace(/^http:/,"https:"));