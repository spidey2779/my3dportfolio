import { useRef, useState } from 'react';
const Contact = () => {
  const formRef = useRef();


  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };



  return (
    <section className="c-space my-20 " id="contact">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text mt-2 md:mt-12">Let&apos;s connect</h3>
          <p className="text-lg text-white-600 mt-1">
            Send mail to connect with me and share your thoughts.
          </p>

          <form ref={formRef}  className="mt-5 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="your name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="your email"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input h-10 md:h-auto"
                placeholder="Type your message"
              />
            </label>

            {/* <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'} */}
            <a className="field-btn w-fit m-auto md:w-auto md:m-0" type=""  href='mailto:gteja2779@gmail.com' >
              {'Send Mail'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
