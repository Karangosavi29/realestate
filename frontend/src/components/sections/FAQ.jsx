import { useState } from "react";

const FAQ = ({ data }) => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        FAQs
      </h2>

      <div className="max-w-3xl mx-auto">
        {data?.map((faq, i) => (
          <div key={faq._id} className="mb-4">
            <button
              className="w-full text-left p-4 bg-white rounded shadow"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.question}
            </button>

            {open === i && (
              <p className="p-4 bg-gray-50">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;