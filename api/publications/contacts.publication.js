import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/contacts.collection';

Meteor.publish('myContacts', function publishAllContacts () {
  return ContactsCollection.find();
});
