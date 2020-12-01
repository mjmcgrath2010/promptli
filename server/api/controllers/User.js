import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const SALT_WORK_FACTOR = 10;

const User = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

User.pre("save", async function (next) {
  if (this.password) {
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (e) {
      next(e);
    }
  } else {
    next();
  }
});

User.methods = {
  validPassword: async function (password) {
    await bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        return false;
      }
      return isMatch;
    });
  },
  isAdmin() {
    return this.admin;
  },
};

export default mongoose.model("user", User);
