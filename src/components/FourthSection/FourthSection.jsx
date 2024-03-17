import Card from "../Card/Card";
import "./FourthSection.css";
import prop1 from "../../assets/images/property-01.jpg"
import prop2 from "../../assets/images/property-02.jpg"
import prop3 from "../../assets/images/property-03.jpg"
import prop4 from "../../assets/images/property-04.jpg"
import prop5 from "../../assets/images/property-05.jpg"
import prop6 from "../../assets/images/property-06.jpg"
const FourthSection = () => {
  return (
    <div className="fourthsection">
      <div className="part1">
        <h6>|PROPERTIES</h6>
        <h1>
          We Provide
          <br /> The Best Property
          <br /> You Like
        </h1>
      </div>
      <div className="part2">
        <Card
          imagePath={prop1}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
        <Card
          imagePath={prop2}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
        <Card
          imagePath={prop3}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
        <Card
          imagePath={prop4}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
        <Card
          imagePath={prop5}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
        <Card
          imagePath={prop6}
          category={"Luxury Villa"}
          price={"2.264.000"}
          title={"18 New Street Miami, OR 97219"}
          prop={{
            Bedrooms:"8",
            Bathrooms:"8",
            Area:"545m2",
            Floor:"3",
            Parking:"6 spots"
          }
          }
        />
      </div>
    </div>
  );
};

export default FourthSection;
