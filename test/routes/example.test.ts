describe('test', () => {
  const fetch = require('node-fetch');

  let token = '';

  it('Signin', async () => {
    const res = await fetch('http://localhost:3333/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@gmail.com',
        password: 'test',
      }),
    }).then((res) => res.json());

    expect(res.statusCode).toBe(200);

    token = res.access;
  });

  it('Get user', async () => {
    const res = await fetch('http://localhost:3333/api/user', {
      method: 'GET',
      headers: {
        'Contetn-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    expect(res.statusCode).toBe(200);

    console.log(res);
  });
});
