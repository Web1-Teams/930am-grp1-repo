

const Policies = ({ title, items }) => {
    return (
      <section className="bg-blue-200 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-950 mb-4">{title}</h2>
        <ul className="text-gray-700 list-disc pl-6">
        {items.map((item, index) => (
          <li key={index}><span className="font-bold">{item.text}</span></li>
        ))}
        </ul>
      </section>
    );
  };
  
  export default Policies;
  
  
  