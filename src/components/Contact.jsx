import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-center">
        <div className="col bg-light p-4 rounded-4 shadow">
          <h3>Contact Us</h3>
          <ContactForm />
        </div>
        <div className="why-choose-us">
          <div className="content p-4">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>We cover the entire country, ensuring your vehicles get where they need to be.</li>
              <li>Choose from open or enclosed transport, and even expedited shipping</li>
              <li>Our testimonials speak to the satisfaction of our clients</li>
              <li>Our straightforward online and phone booking process saves you time.</li>
              <li>Count on us for on-time deliveries and dependable service.</li>
              <li>Always seek to improve</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
