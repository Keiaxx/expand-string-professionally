const expand = require('../index')

const assert = require('assert');

describe('Expand String', function () {
    describe('Expansion test', function () {
        it('should expand one space by default', function () {
            assert.equal(expand('test'), 't e s t');
        });

        it('should expand two spaces when specified', function () {
            assert.equal(expand('test', 2), 't  e  s  t');
        });

        it('should expand spaces as well', function () {
            assert.equal(expand('t e s t'), 't   e   s   t');
        });

        it('should default to one space when invalid number', function () {
            assert.equal(expand('test', 'test'), 't e s t');
        });
    });
});