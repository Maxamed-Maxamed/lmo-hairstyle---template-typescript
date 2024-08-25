import React from 'react';

const Booking: React.FC = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Book an Appointment</h2>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Appointment Date
          </label>
          <input id="date" type="date" className="w-full px-3 py-2 border rounded" />
        </div>
        <button className="w-full px-4 py-2 bg-primary text-white font-bold rounded">Submit</button>
      </form>
    </section>
  );
};

export default Booking;