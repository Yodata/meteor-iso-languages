Tinytest.add('Lookup English name by ISO code', function(test) {
	var name = ISOLanguages.getName('en');

	test.equal(name, 'English');
});

Tinytest.add('Lookup native name by ISO code', function(test) {
	var name = ISOLanguages.getNativeName('ts');

	test.equal(name, 'Xitsonga');
});

Tinytest.add('List name pairs', function(test) {
	var list = ISOLanguages.getNamePairs();
	test.equal(list.length, 182);
});

Tinytest.add('List native name pairs', function(test) {
	var list = ISOLanguages.getNativeNamePairs();
	test.equal(list.length, 182);
});
