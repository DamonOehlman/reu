/**
  ### `reu/ip`

  A regular expression that will match both IPv4 and IPv6 addresses.

**/
module.exports = /^((\d+\.){3}\d+|([a-fA-F0-9]{0,4}\:){7}[a-fA-F0-9]{0,4})$/;
