import Accordion from "./components/Accordion/Accordion";
import FooterSection from "./components/FooterSection/FooterSection";
import PageHeading from "./components/PageHeading/PageHeading";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import singleproperty from './assets/images/single-property.jpg'
import icon1 from './assets/images/infoicon-01.png'
import icon2 from './assets/images/infoicon-02.png'
import icon3 from './assets/images/infoicon-03.png'
import icon4 from './assets/images/infoicon-04.png'

const PropertyDetails = () => {
  return (
    <div className="propertydetails">
      <PageHeading
        title1={"HOME / SINGLE PROPERTY"}
        title2={"SINGLE PROPERTY"}
      />
      <div className="property-part1">
        <div className="property-image">
          <img src={singleproperty} />
        </div>
        <div className="property-card">
          <div className="property-row">
            <div className="property-icon">
              <img src={icon1} />
            </div>
            <div className="property-content">
              <h1>450 m2</h1>
              <h6>Total Flat Space</h6>
            </div>
          </div>
          <div className="divider"></div>
          <div className="property-row">
            <div className="property-icon">
              <img src={icon2} />
            </div>
            <div className="property-content">
              <h1>Contract</h1>
              <h6>Contract Ready</h6>
            </div>
          </div>
          <div className="divider"></div>
          <div className="property-row">
            <div className="property-icon">
              <img src={icon3} />
            </div>
            <div className="property-content">
              <h1>Payment</h1>
              <h6>Payment Process</h6>
            </div>
          </div>
          <div className="divider"></div>
          <div className="property-row">
            <div className="property-icon">
              <img src={icon4} />
            </div>
            <div className="property-content">
              <h1>Saftey</h1>
              <h6>24/7 Under Control</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="property-part2">
        <div className="property-category">Apparment</div>
        <h4>24 New Street Miami, OR 24560</h4>
        <div className="property-divider"></div>
        <p>
          Get the <strong>best villa agency</strong> HTML CSS Bootstrap Template
          for your company website. TemplateMo provides you the best free CSS
          templates in the world. Please tell your friends about it. Thank you.
          Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents
          single-origin coffee schlitz enamel pin you probably haven't heard of
          them ugh hella. <br />
          <br />
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
          +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
          PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>
      <div className="property-accordion">
        <Accordion />
      </div>
      </div>
      <ThirdSection/>
      <FooterSection/>
    </div>
  );
};

export default PropertyDetails;
