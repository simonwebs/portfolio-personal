// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const NotifyEmailsCollection = new Mongo.Collection('notifyemails');

const NotifyEmailsSchema = new SimpleSchema({
  notifyemail: {
    type: String,
  },

  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});
NotifyEmailsCollection.attachSchema(NotifyEmailsSchema);
