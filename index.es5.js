'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textr = require('textr');

var _textr2 = _interopRequireDefault(_textr);

var _typographicApostrophes = require('typographic-apostrophes');

var _typographicApostrophes2 = _interopRequireDefault(_typographicApostrophes);

var _typographicQuotes = require('typographic-quotes');

var _typographicQuotes2 = _interopRequireDefault(_typographicQuotes);

var _typographicApostrophesForPossessivePlurals = require('typographic-apostrophes-for-possessive-plurals');

var _typographicApostrophesForPossessivePlurals2 = _interopRequireDefault(_typographicApostrophesForPossessivePlurals);

var _typographicArrows = require('typographic-arrows');

var _typographicArrows2 = _interopRequireDefault(_typographicArrows);

var _typographicCopyright = require('typographic-copyright');

var _typographicCopyright2 = _interopRequireDefault(_typographicCopyright);

var _typographicEllipses = require('typographic-ellipses');

var _typographicEllipses2 = _interopRequireDefault(_typographicEllipses);

var _typographicEmDashes = require('typographic-em-dashes');

var _typographicEmDashes2 = _interopRequireDefault(_typographicEmDashes);

var _typographicEnDashes = require('typographic-en-dashes');

var _typographicEnDashes2 = _interopRequireDefault(_typographicEnDashes);

var _typographicMathSymbols = require('typographic-math-symbols');

var _typographicMathSymbols2 = _interopRequireDefault(_typographicMathSymbols);

var _typographicRegisteredTrademark = require('typographic-registered-trademark');

var _typographicRegisteredTrademark2 = _interopRequireDefault(_typographicRegisteredTrademark);

var _typographicTrademark = require('typographic-trademark');

var _typographicTrademark2 = _interopRequireDefault(_typographicTrademark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = (0, _textr2.default)().use(_typographicApostrophes2.default, _typographicQuotes2.default, _typographicApostrophesForPossessivePlurals2.default,
// arrows,
// copyright,
_typographicEllipses2.default, _typographicEmDashes2.default, _typographicEnDashes2.default
// mathSymbols,
// registeredTrademark,
// singleSpaces,
// trademark
);
// import singleSpaces from 'typographic-single-spaces';
exports.default = base;
module.exports = exports['default'];
