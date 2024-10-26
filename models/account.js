// mongoose schema: account

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    reputation: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
