module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7bff7e4bb6f6362dc5ae8125b258ffe6'),
    },
  },
});
