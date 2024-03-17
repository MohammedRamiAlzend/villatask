import PageHeading from "./components/PageHeading/PageHeading";
import FooterSection from "./components/FooterSection/FooterSection";
import Phone from './assets/images/Phoneicon.png'
import Email from './assets/images/emailicon.png'
const ContactUs = () => {
  return (
    <div className="contactus">
      <PageHeading title1={"HOME / CONTACT US"} title2={"CONTACT US"} />
      <div className="contactus-part1">
        <div className="contactus-section1">
          <h6 className="h6">| CONTACT US</h6>
          <h1 className="h1">
            Get In Touch
            <br />
            With Our Agents
          </h1>
          <p className="p">
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </p>
          <div className="contactus-info">
            <div className="contactus-info-icon">
              <img src={Phone} />
            </div>
            <div className="contactus-info-data">
              <h1>010-020-0340</h1>
              <h2>Phone Number</h2>
            </div>
          </div>
          <div className="contactus-info">
            <div className="contactus-info-icon">
              <img src={Email} />
            </div>
            <div className="contactus-info-data">
              <h1>info@mail.com</h1>
              <h2>Business Email</h2>
            </div>
          </div>
        </div>
        <div className="contactus-section2">
          <form className="contactus-form">
            <div className="contactus-form-input">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name..." />
            </div>
            <div className="contactus-form-input">
              <label>Email Address</label>
              <input type="email" placeholder="Your E-mail..." />
            </div>
            <div className="contactus-form-input">
              <label>Subject</label>
              <input type="text" placeholder="Subject..." />
            </div>
            <div className="contactus-form-input">
              <label>Message</label>
              <textarea placeholder="Your Message" rows={5} />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default ContactUs;
