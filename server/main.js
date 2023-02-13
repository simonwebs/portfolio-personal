import { Meteor } from 'meteor/meteor';

import '../api/collections/contacts.collection';
import '../api/collections/NotifyEmailsCollection';

import '../api/methods/NotifyEmailsMethods';
import '../api/methods/contacts.methods';

import '../api/publications/contacts.publication';
import '../api/publications/NotifyEmailsPublication';

Meteor.startup(() => {
});
