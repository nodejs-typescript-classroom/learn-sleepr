describe('Reservations', () => {
  let jwt: string;
  beforeAll(async () => {
    const user = {
      email: 'wang19880522+2@gmail.com',
      password: 'StrongPasword123!@',
    };
    await fetch('http://auth:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await fetch('http://auth:3001/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    jwt = await response.text();
  });
  test('Create & Get', async () => {
    const createdReservation = await createReservation();
    const responseGet = await fetch(
      `http://reservations:3000/reservations/${createdReservation._id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authentication: jwt,
        },
      },
    );
    const reservation = await responseGet.json();
    expect(createdReservation).toEqual(reservation);
  });
  const createReservation = async () => {
    const responseCreate = await fetch(
      'http://reservations:3000/reservations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authentication: jwt,
        },
        body: JSON.stringify({
          startDate: '12-28-2023',
          endDate: '12-25-2023',
          placeId: '123',
          invoiceId: '456',
          charge: {
            amount: 15,
            card: {
              cvc: '413',
              exp_month: 12,
              exp_year: 2027,
              number: '4242 4242 4242 4242',
            },
          },
        }),
      },
    );
    expect(responseCreate.ok).toBeTruthy();
    const createdReservation: Record<string, string> =
      await responseCreate.json();
    return createdReservation;
  };
});
