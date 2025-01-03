import React from "react";
import Question from "./Question";

function FAQPage() {
  const questions = [
    { question: "What is your return policy?", answer: "Our return policy allows you to return products within 14 days of purchase, provided they are in their original condition." },
    { question: "Do you provide warranties on products?", answer: "Yes, we provide warranties for all products. Warranty durations vary based on the product type." },
    { question: "How long does shipping take?", answer: "Shipping typically takes 3–7 business days, depending on your location." },
    { question: "Are all your products original?", answer: "Yes, we only sell 100% original products from trusted brands." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and cash on delivery." },
    { question: "Can I track my order after purchase?", answer: "Yes, we provide an order tracking service. Once your order is shipped, we will send you a tracking number via email or SMS, which you can use to track your order status on the shipping company's website." },
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6  text-blue-600">Frequently Asked Questions</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
        {questions.map((q, index) => (
          <Question key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;