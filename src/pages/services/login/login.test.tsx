import { Login } from "@/pages/services/Services";

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'vasco@vasco'

    it('Deve exibir um alerta de boas vindas', () => {
        Login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`);

    });
    it('Não deve exbir um alerta de boas vindas sem o email', () => {
        Login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo');
    });
});