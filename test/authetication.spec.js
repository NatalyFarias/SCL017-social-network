// importamos la funcion que vamos a testear
import { signInWithPassword } from '../src/lib/auth/authetication';
jest.mock("./authetication")

describe('signInWithPassword', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithPassword).toBe('function');
  });

  it('debería logearse y que el usuario verifico su email', () => {
    signInWithPassword('nataly.fariasg@gmail.com', '12345678').then(res => {
      // const responseSign = JSON.parse(JSON.stringify(res));
      expect(res.user.emailVerified).toBe(true)
    })
  });
});
