[![Build Status](https://travis-ci.org/Yodata/meteor-iso-languages.svg)](https://travis-ci.org/Yodata/meteor-iso-languages)

# ISO Languages

A simple library to either find the display string for an ISO 639-1 language code, in either English or the native language spelling, or return a list of key value pairs, containing the language code and name.

## Install
```cli
meteor add bshamblen:iso-languages
```

## Use

### ISOLanguages.getName(*langCode*)

Returns a string representing the English spelling of the language for the given ISO 639-1 language code.

### ISOLanguages.getNativeName(*langCode*)

Returns a string representing the native spelling of the language for the given ISO 639-1 language code.

### ISOLanguages.getNamePairs()

Returns a multidimensional array, containing key/value arrays. The key within each sub array is the ISO 639-1 language code and the value is the string representing the English spelling of the corresponding language code.

### ISOLanguages.getNativeNamePairs()

Returns a multidimensional array, containing key/value arrays. The key within each sub array is the ISO 639-1 language code and the value is the string representing the native spelling of the corresponding language code.