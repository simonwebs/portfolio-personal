/* eslint-disable quotes */
/* eslint-disable comma-dangle */
// @ts-nocheck
// import { Meteor } from "meteor/meteor";
import React, { memo } from "react";
import { ContactsCollection } from "../../../api/collections/contacts.collection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { Loading } from "../../components/spinner/Loading";

export const ContactList = () => {
  const isLoading = useSubscribe("myContacts");
  const contacts = useFind(() =>
    ContactsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  );

  if (isLoading()) {
    return <Loading />;
  }

  const ContactItem = memo(({ contact }) => {
    return (
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="divide-x divide-gray-800 bg-white">
          <tr className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            <td className="whitespace-nowrap text-left py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {contact.name}
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              {contact.subject}
            </td>
            <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
              {contact.email}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {contact.description}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {contact.name}</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <div className="mt-20">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Subject
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Message
              </th>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit<span className="sr-only"></span>
                </a>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <table className="min-w-full divide-y divide-gray-300">
        <tbody className="divide-y divide-gray-200 bg-white">
          <ul role="list" className="divide-y divide-gray-200 bg-white">
            {contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </ul>
        </tbody>
      </table>
    </div>
  );
};
