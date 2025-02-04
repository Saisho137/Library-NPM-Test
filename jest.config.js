export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {},
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    }
};
