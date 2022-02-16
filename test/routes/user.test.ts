describe('User test', () => {
  const fetch = require('node-fetch');
  let token = '';
  let user;

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
        'Contetn-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).toBe(200);
      return res.json();
    });

    user = data;
    console.log(user);
  });

  it('Update user', async () => {
    const data = await fetch(`http://localhost:3333/api/user/${user.user_id}`, {
      method: 'PUT',
      headers: {
        'Contetn-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        is_org_rep: !user.is_org_rep,
        is_org_admin: !user.is_org_admin,
      }),
      //// postmanでは正しく動作する
      // data: {
      //   user_id: '8786a0f9-2457-4da2-aa83-e4dc1c5f2d7e',
      //   first_name: 'User01',
      //   last_name: 'Demo',
      //   avatar_img: '',
      //   comment: '',
      //   org_id: '',
      //   is_org_rep: false,
      //   is_org_admin: false,
      // },
    }).then((res) => {
      expect(res.status).toBe(200);
      const data = res.json();
      // expect(data.is_org_rep).not.toBe(user.is_org_rep);
      return data;
    });

    console.log(data);
  });

  // it('Get settings', async () => {
  //   const data = await fetch(
  //     `http://localhost:3333/api/settings/${user.user_id}`,
  //     {
  //       headers: {
  //         'Contetn-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   ).then((res) => {
  //     expect(res.status).toBe(200);
  //   });
  // });
});
