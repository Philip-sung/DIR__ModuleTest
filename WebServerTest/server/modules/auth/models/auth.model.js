import { Schema, model } from 'mongoose';

const authSchema = new Schema({
    id: String,
    pw: String
});

const Auth = model('auth', authSchema);

export default Auth;