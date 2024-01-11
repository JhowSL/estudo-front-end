import { multiplica, soma } from './soma';

describe('Soma', () => {
    it('Deve somar 1 numero informado', () => {
        const value = soma(1);
        expect(value).toBe(2);
    });

    it('Deve multiplicar 1 numero por 2', () => {
        const value = multiplica(2, 2);
        expect(value).toBe(4);
    });

    it('Deve multiplicar 1 numero por 3', () => {
        const value = multiplica(2, 3);
        expect(value).toBe(6);
    });

    it('Deve informar erro com multiplicador diferente de 2 ou 3', () => {
        const value = multiplica(2, 4);
        expect(value).toBe('Mutiplicador não aceito');

    });
});