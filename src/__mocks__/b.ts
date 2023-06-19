const bModule = jest.createMockFromModule<typeof import ("../b")>("../b");

bModule.b = jest.fn();

module.exports = bModule;