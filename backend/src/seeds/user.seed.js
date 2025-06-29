import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

if (process.env.NODE_ENV === "development") {
  console.log("❌ Seeding not allowed in production!");
  process.exit(1);
}

const seedUsers = [
  // your user objects
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("✅ Seeded users.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

seedDatabase();
