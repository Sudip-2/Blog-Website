import mongoose from 'mongoose'

const notifySubscribeSchema = new mongoose.Schema({
  endpoint: {
    type: String,
    required: true,
  },
  expirationTime: {
    type: Date,
    default: null,
  },
  keys: {
    p256dh: {
      type: String,
      required: true,
    },
    auth: {
      type: String,
      required: true,
    },
  }
  });

export const notifySub = mongoose.model('notifysub', notifySubscribeSchema);