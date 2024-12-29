import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatsteck:q349861353@cluster0.tjfcd39.mongodb.net/"
    )
    .then(() => console.log("DB Connected"));
};
