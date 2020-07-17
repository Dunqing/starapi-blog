module.exports = ({ env }) => {
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 2337),
  };
};
// module.exports = ({
//   env
// }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 2337)
// });
