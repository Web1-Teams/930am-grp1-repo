import React from 'react';

const ValuesSection = ({ values }) => (
  <section className="mt-10">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Values</h2>
    <ul className="list-disc list-inside space-y-2">
      {values.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  </section>
);

export default ValuesSection;