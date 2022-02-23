describe('User test', () => {
  const fetch = require('node-fetch');

  let token = '';
  let user;

  it('Signup', async () => {
    const data = await fetch('http://localhost:3333/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@gmail.com',
        password: 'test',
        first_name: 'User01',
        last_name: 'Test',
      }),
    }).then((res) => {
      expect(res.status).toBe(200);
      return res.json();
    });
  });

  // it('Signin', async () => {
  //   const data = await fetch('http://localhost:3333/api/auth/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: 'test@gmail.com',
  //       password: 'test',
  //     }),
  //   }).then((res) => {
  //     expect(res.status).toBe(200);
  //     return res.json();
  //   });

  //   token = data.access;
  // });

  // it('Get user', async () => {
  //   const data = await fetch('http://localhost:3333/api/user', {
  //     headers: {
  //       'Contetn-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) => {
  //     expect(res.status).toBe(200);
  //     return res.json();
  //   });

  //   user = data;
  // });

  // it('Update user', async () => {
  //   const data = await fetch(`http://localhost:3333/api/user/${user.user_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       is_org_rep: !user.is_org_rep,
  //       is_org_admin: !user.is_org_admin,
  //     }),
  //   })
  //     .then((res) => {
  //       expect(res.status).toBe(200);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       expect(data.is_org_rep).not.toBe(user.is_org_rep);
  //     });
  // });
});
