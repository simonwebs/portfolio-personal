/* eslint-disable comma-dangle */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const saveContact = () => {
    Meteor.call(
      'contacts.insert',
      { name, email, subject, description },
      (errorResponse) => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setName('');
          setEmail('');
          setSubject('');
          setDescription('');
          showSuccess({ message: 'Your message has been sent.' });
        }
      }
    );
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="relative bg-transparent dark:bg-slate-800 mt-20 mb-20"
        data-aos="fade-right"
        data-aos-duration="4000"
      >
        <div
          className="text-center"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2 className="px-3 mt-5 py-6 text-3xl  font-serif font-medium text-center text-primary dark:text-tertiaryOne">
            Contact Form
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-52 h-52 bg-primary/10 dark:bg-primary/20 rounded-full mix-blend-multiply  animate-blob"></div>
            <div className="absolute top-0 -right-4 w-52 h-52 bg-buttonM/10 dark:bg-buttonM/20 rounded-full mix-blend-multiply  animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-52 h-52 bg-pink-300/10 rounded-full mix-blend-multiply  animate-blob animation-delay-4000"></div>
            <div className="absolute -bottom-9 right-30 w-52 h-52 bg-pink-300/10 dark:bg-pink-300/20 rounded-full mix-blend-multiply  animate-blob animation-delay-4000"></div>
            <div className="absolute -bottom-9 right-60 w-52 h-52 bg-pink-300/10 dark:bg-pink-300/20 rounded-full mix-blend-multiply  animate-blob animation-delay-4000"></div>
            <div className="relative flex justify-center max-w-2xl mx-auto">
              <div className="relative z-20 bg-white/60 dark:bg-slate-800/30 rounded-lg shadow-md py-6 px-4">
                <form
                  action=""
                  className="space-x-6"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  {error && <ErrorAlert message={error} />}
                  {success && <SuccessAlert message={success} />}
                  <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 space-y-3">
                    <div className="py-1 mt-3 ml-3">
                      <label
                        htmlFor="name"
                        className="ml-4 text-sm font-medium text-primary dark:text-tertiaryOne"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex justify-center overflow-hidden shadow-md bg-white/70 dark:bg-slate-800/80 dark:text-white dark:hover:ring-tertiaryOne ring-1 focus:outline-0 text-gray-700 ring-primary/20 dark:ring-primary/50 hover:ring-primary rounded-t-lg py-1.5 px-4 text-sm"
                      />
                    </div>
                    <div className="py-1">
                      <label
                        htmlFor="email"
                        className="ml-4 text-sm font-medium text-primary dark:text-tertiaryOne"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex justify-center overflow-hidden shadow-md bg-white/70 dark:bg-slate-800/80 dark:text-white dark:hover:ring-tertiaryOne ring-1 focus:outline-0 text-gray-700 ring-primary/20 dark:ring-primary/50 hover:ring-primary rounded-t-lg py-1.5 px-4 text-sm"
                      />
                    </div>
                    <div className="py-1">
                      <label
                        htmlFor="subject"
                        className="ml-4 text-sm font-medium text-primary dark:text-tertiaryOne"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="flex justify-center overflow-hidden shadow-md bg-white/70 dark:bg-slate-800/80 dark:text-white dark:hover:ring-tertiaryOne ring-1 focus:outline-0 text-gray-700 ring-primary/20 dark:ring-primary/50 hover:ring-primary rounded-t-lg py-1.5 px-4 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className=" ml-4 text-sm font-medium text-primary dark:text-tertiaryOne"
                      >
                        Message
                      </label>
                      <textarea
                        id="description"
                        type="text"
                        rows={2}
                        placeholder="Add your Message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex justify-center overflow-hidden shadow-md  bg-white/70 dark:bg-slate-800/80 dark:text-white dark:hover:ring-tertiaryOne ring-1 focus:outline-0 text-gray-700 ring-primary/20 dark:ring-primary/50 hover:ring-primary rounded-t-lg py-1.5 px-4 text-sm"
                      />
                    </div>
                    <div className="py-1 lg:ml-0">
                      <button
                        type="button"
                        onClick={saveContact}
                        className="mt-3 w-full rounded-md items-center px-5 py-2 overflow-hidden bg-primary dark:bg-primary ring-1 ring-primary/10 dark:ring-slate-600/70 hover:ring-white shadow-lg focus:ring-offset-0 dark:hover:ring-white text-lg text-white  sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center  hover:bg-primary/70 dark:hover:bg-slate-800"
                      >
                        {' '}
                        <span className="text-lg flex justify-center items-center font-semibold dark:text-gray-100">
                          Send Message
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
