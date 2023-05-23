describe('Reservations', () => {
  beforeAll(async () => {
    const user = {
      email: 'yuanyu90221+2@gmail.com',
      password: 'StrongPasword123!@',
    };
    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user);
    });
  });
  test('Create', async () => {

  });
});
