const bModule = jest.createMockFromModule<typeof import ("../b")>("../b");

bModule.b = jest.fn().mockImplementation(() => {
    throw new Error("Mock not implemented");
});

module.exports = bModule;