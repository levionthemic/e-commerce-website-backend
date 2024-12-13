const productRoutes = require("./product.route");
const userRoutes = require("./user.route");
const cartRoutes = require("./cart.route");
const checkoutRoutes = require("./checkout.route");
const categoryRoutes = require("./category.route");
const { requireAuth } = require("../../middlewares/client/auth.middleware");
// const { requireCart } = require("../../middlewares/client/cart.middleware");
const cors = require("cors");

const corsOptions = {
  origin: "https://e-commerce-website-client-steel.vercel.app",
  methods: "GET,POST,PUT,DELETE,PATCH",
  allowedHeaders: "Content-Type,Authorization",
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

module.exports = (app) => {
  const version = "/api/v1";
  app.options("*", cors(corsOptions));

  app.use(version + "/products", requireAuth, productRoutes);
  app.use(version + "/user", userRoutes);
  app.use(version + "/cart", requireAuth, cartRoutes);
  app.use(version + "/checkout", requireAuth, checkoutRoutes);
  app.use(version + "/category", requireAuth, categoryRoutes);
};
