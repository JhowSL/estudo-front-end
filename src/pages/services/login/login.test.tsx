import { Login } from "@/pages/services/Services";

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alerta de boas vindas', () => {
        Login();
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo');

    });
});