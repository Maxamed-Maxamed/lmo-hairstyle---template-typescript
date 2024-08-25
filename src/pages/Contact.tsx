import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input id="name" type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea id="message" className="w-full px-3 py-2 border rounded" rows={4}></textarea>
        </div>
        <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded">Submit</button>
      </form>
    </section>
  );
};

export default Contact;