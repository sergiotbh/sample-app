const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add resolver configuration to ignore test files
config.resolver.blacklistRE = /(__tests__|\.test\.|\.spec\.).*$/;

// Alternative approach using platforms (if the above doesn't work)
config.resolver.platforms = ['native', 'ios', 'android'];

module.exports = config;