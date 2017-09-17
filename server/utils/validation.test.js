'use strict';

const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject string with only whitespace', () => {
        let res = isRealString('        ');
        expect(res).toBe(false);
    });
    it('should allow string non-space characters', () => {
        let res = isRealString('username');
        expect(res).toBe(true);
    });
});
