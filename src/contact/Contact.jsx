import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-decs">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <section>
        <form action="">
          <div className="form-ctrl">
            <div className="form-name">
              <label>First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-name">
              <label>Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-email">
            <label>Email</label>
            <input type="email" id="email" placeholder="yourname@gmail.com" />
          </div>
          <div className="form-message">
            <label>Message</label>
            <textarea name="" id="message" cols="30" rows="10">
              Send me a message and I'll reply you as soon as possible...
            </textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" name="" id="" />
            <p>You agree to providing your data to who may contact you.</p>
          </div>
          <div className="form-btn">
            <button id="btn__submit">Send message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
