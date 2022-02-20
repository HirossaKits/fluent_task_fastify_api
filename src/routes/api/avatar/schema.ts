// const User = {
//   user_id: { type: 'string' },
//   first_name: { type: 'string' },
//   last_name: { type: 'string' },
//   avatar_img: { type: 'string' },
//   comment: { type: 'string' },
//   org_id: { type: 'string' },
//   is_org_rep: { type: 'boolean' },
//   is_org_admin: { type: 'boolean' },
// };

export const updateProfile = {
  params: {
    user_id: { type: 'string' },
  },
  //   body: {
  //     type: 'object',
  //     properties: {
  //       first_name: { type: 'string' },
  //       last_name: { type: 'string' },
  //       avatar_img: { type: 'string' },
  //       comment: { type: 'string' },
  //       upload_file: { isFileType: true },
  //     },
  //   },
  // response: {
  //   200: User,
  // },
};
