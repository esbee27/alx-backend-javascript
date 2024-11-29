describe(`calculateNumber`, () => {
    it(`floating point whole numbers`, () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    })
})