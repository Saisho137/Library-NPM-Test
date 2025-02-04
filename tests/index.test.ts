import greet from '../src/index';

test('greet function returns correct message', () => {
    expect(greet('World')).toBe('Hola, ¡World!');
});
