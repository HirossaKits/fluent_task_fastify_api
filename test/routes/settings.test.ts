describe('Settings test', () => {
  const fetch = require('node-fetch');

  let token = '';
  let user;
  let settings;

  it('Signin', async () => {
    const data = await fetch('http://localhost:3333/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@gmail.com',
        password: 'test',
      }),
    }).then((res) => {
      expect(res.status).toBe(200);
      return res.json();
    });

    token = data.access;
  });

  it('Get user', async () => {
    const data = await fetch('http://localhost:3333/api/user', {
      headers: {
        // 'Contetn-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).toBe(200);
      return res.json();
    });

    user = data;
  });

  it('Get settings', async () => {
    const data = await fetch(
      `http://localhost:3333/api/settings/${user.user_id}`,
      {
        headers: {
          'Contetn-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => {
      expect(res.status).toBe(200);
      const data = res.json();
      return data;
    });

    settings = data;
  });

  it('Update settings', async () => {
    const data = await fetch(
      `http://localhost:3333/api/settings/${user.user_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          darkmode: !settings.darkmode,
          tooltip: !settings.tooltip,
        }),
      }
    ).then((res) => {
      console.log(res);
      // expect(res.status).toBe(200);
      // const data = res.json();
      // expect(data.dark_mode).not.toBe(settings.dark_mode);
      // console.log(data);
      return res.json();
    });
    console.log(data);
  });
});
