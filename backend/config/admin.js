module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a39f9eaa15ded09f39896f99b7331daa'),
  },
});
