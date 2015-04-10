var test = require('tape');
var reIP = require('../ip');

function checkPasses(t) {
  t.plan(1);
  t.ok(reIP.test(t.name.split('|')[0]), 'pass');
}

function checkFails(t) {
  t.plan(1);
  t.notOk(reIP.test(t.name.split('|')[0]), 'pass');
}

test('reu/ip IPv4 passing cases', function(t) {
  t.test('0.0.0.0', checkPasses);
});

test('reu/ip IPv6 passing cases', function(t) {
  t.test('2402:1800:f:6111:b6b6:76ff:fe2a:a8a5', checkPasses);
  t.test('2001::9d38:6abd:3806:b1c:7d3d:308b', checkPasses);
});

test('reu/ip failing cases', function(t) {
  t.test('|empty string', checkFails);
  t.test('a.b.c.d|invalid IPv4 address', checkFails);
});
