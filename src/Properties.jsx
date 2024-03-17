import Card from "./components/Card/Card";
import FooterSection from "./components/FooterSection/FooterSection";
import PageHeading from "./components/PageHeading/PageHeading";
import Pagination from "./components/Pagination/Pagination";
import prop1 from "./assets/images/property-01.jpg"
import prop2 from "./assets/images/property-02.jpg"
import prop3 from "./assets/images/property-03.jpg"
import prop4 from "./assets/images/property-04.jpg"
import prop5 from "./assets/images/property-05.jpg"
import prop6 from "./assets/images/property-06.jpg"

const Properties = () => {
  return (
    <div className="properties">
      <PageHeading title1={"HOME/PROPERTIES"} title2={"PROPERTIES"} />

      <div className="buttons">
        <ul>
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Appartment</button>
          </li>
          <li>
            <button>Villa House</button>
          </li>
          <li>
            <button>Penthouse</button>
          </li>
        </ul>
    </div>

        <div className="part22">
          <Card
            imagePath={prop1}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
          <Card
            imagePath={prop2}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
          <Card
            imagePath={prop3}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
          <Card
            imagePath={prop4}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
          <Card
            imagePath={prop5}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
          <Card
            imagePath={prop6}
            category={"Luxury Villa"}
            price={"2.264.000"}
            title={"18 New Street Miami, OR 97219"}
            prop={{
              Bedrooms: "8",
              Bathrooms: "8",
              Area: "545m2",
              Floor: "3",
              Parking: "6 spots",
            }}
          />
        </div>

        <Pagination/>
        <FooterSection/>
      </div>
  );
};

export default Properties;
