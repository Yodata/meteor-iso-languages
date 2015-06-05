Package.describe({
	name: 'bshamblen:iso-languages',
	version: '0.0.2',
	summary: 'ISO 639-1 language code lookup and list library.',
	git: 'https://github.com/yodata/meteor-iso-languages.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
	api.use('underscore');
	api.addFiles('iso-languages.js');
	api.export(['ISOLanguages'], ['client', 'server']);
});

Package.onTest(function(api) {
	api.use('bshamblen:iso-languages', ['client', 'server']);
	api.use(['tinytest', 'underscore']);
	api.addFiles('iso-languages-tests.js');
});
