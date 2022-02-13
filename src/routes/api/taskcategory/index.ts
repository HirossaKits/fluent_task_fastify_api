// import { FastifyInstance, FastifyPluginOptions, FastifyError } from 'fastify';

// const taskcategory = {
//   tyep: 'object',
//   properties: {
//     task_category_id: { type: 'integer' },
//     task_category_name: { type: 'string' },
//     porject_id: { type: 'integer' },
//   },
// };

// const getTaskCategory = {
//   schema: {
//     response: {
//       200: {
//         type: 'array',
//         items: taskcategory,
//       },
//     },
//   },
//   handler: getProducts,
// };

// const getProductOpts = {
//   schema: {
//     params: {
//       id: { type: 'integer' },
//     },
//     response: {
//       200: Product,
//     },
//   },
//   handler: getProduct,
// };

// const postProductOpts = {
//   schema: {
//     body: {
//       type: 'object',
//       required: ['name', 'price'],
//       properties: {
//         name: { type: 'string' },
//         price: { type: 'integer' },
//       },
//     },
//   },
//   handler: addProduct,
// };

// const deleteProductOpts = {
//   schema: {
//     params: {
//       id: { type: 'integer' },
//     },
//     response: {
//       200: Product,
//     },
//   },
//   handler: deleteProduct,
// };

// const updateProductOpts = {
//   schema: {
//     params: {
//       id: { type: 'integer' },
//     },
//     response: {
//       200: Product,
//     },
//   },
//   handler: updateProduct,
// };

// function productRoutes(
//   fastify: FastifyInstance,
//   options: FastifyPluginOptions,
//   done: FastifyError
// ) {
//   fastify.get('/taskcategory', getProductsOpts);
//   fastify.get('/taskcategory/:id', getProductOpts);
//   fastify.post('/taskcategory', postProductOpts);
//   fastify.delete('/taskcategory/:id', deleteProductOpts);
//   fastify.put('/taskcategory/:id', updateProductOpts);
// }

const taskcategory = async (fastify: any, options: any, done: any) => {
  //   fastify.get('/:user_id');
  //   fastify.put('/:user_id');
};

export default taskcategory;
