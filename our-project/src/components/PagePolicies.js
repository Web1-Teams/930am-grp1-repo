import Policies from './Policies';


const PagePolicies = () => {
    const policies = [
      {
        title: 'Payment Methods',
        items: [
          { text: 'The available payment methods are cash on delivery or via credit cards (Visa and MasterCard).' },
          { text: 'Customers have the right to inspect the product and ensure its condition before payment.' },
          { text: 'The payment method will appear on the order completion page.' },
          { text: 'Payment is made in NIS currency as indicated on the order completion page.' },
        ],
      },
      {
        title: 'Exchange Policy',
        items: [
          { text: 'Ensure to keep the invoice of the received product attached to the package.' },
          { text: 'An exchange request must be submitted within 24 hours of receiving the package.' },
          { text: 'Exchange requests are submitted through live chat with customer service.' },
          { text: 'A symbolic exchange fee applies: 10 NIS for the West Bank, 20 NIS for Jerusalem, and 35 NIS for the 48 regions.' },
          { text: 'Exchanges are free of charge if a defect in the product is identified.' },
          { text: 'Products can be exchanged for others of the same price or for higher-priced products by paying the price difference.' },
          { text: 'Exchange requests will not be accepted if the product is damaged, used, or incomplete.' },
          { text: 'Exchanges are available for all products except for perfumes, innerwear, and electronics.' },
        ],
      },
      {
        title: 'Return Policy',
        items: [
          { text: 'Return requests must be submitted within 24 hours of receiving the package.' },
          { text: 'Return fees 20 NIS for the West Bank and Jerusalem, 50 NIS for the 48 regions.' },
          { text: 'Delivery employee has the right to inspect the returned product before accepting it.' },
        ],
      },
      {
        title: 'Delivery Methods',
        items: [
          { text: 'Products are delivered through Mart’s dedicated delivery service.' },
          { text: 'Delivery available to all cities and villages.' },
          { text: 'Delivery fees 20 NIS for orders below 250 NIS for the West Bank.' },
        ],
      },
    ];
  
    return (
      <div className="container mx-auto p-6  text-blue-950">
        <h1 className="text-3xl font-bold text-center mb-8">Electroniatak Policies</h1>
        {policies.map((item) => (
  <Policies title={item.title} items={item.items} />
))}</div>
    );
  };
  
  export default PagePolicies;
  