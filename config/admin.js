module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b9bb12d5cf16f387f571f6644d94ab56'),
  },
});
