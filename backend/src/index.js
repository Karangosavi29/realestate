import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import connectDB from "./db/index.js";

// routes
import authRoutes from "./routes/auth.routes.js";
import faqRoutes from "./routes/faq.routes.js";
import contentRoutes from "./routes/content.routes.js";
// import amenityRoutes from "./routes/amenity.routes.js";
// import constructionRoutes from "./routes/construction.routes.js";

dotenv.config();

const app = express();

// ✅ middlewares
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ SESSION (FIXED)
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // keep false for localhost
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// ✅ connect DB
connectDB();

// ✅ routes
app.use("/api/auth", authRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/content", contentRoutes);
// app.use("/api/amenities", amenityRoutes);
// app.use("/api/construction", constructionRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});