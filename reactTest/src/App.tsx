import Card from "./components/Card";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const App = () => {
  const images = [img1, img2, img3];

  const locTitles = ["New York", "Caves", "Neptune"];
  const descriptions = [
    "The greatest city in the US",
    "Explore the unknown",
    "The planet of frost",
  ];
  const buttonText = "Open";
  const buttonLinks = [
    "https://en.wikipedia.org/wiki/New_York_City",
    "https://en.wikipedia.org/wiki/Cave",
    "https://en.wikipedia.org/wiki/Neptune",
  ];

  return (
    <div>
      <ul
        style={{ listStyle: "none", padding: 0, display: "flex", gap: "20px" }}
      >
        {locTitles.map((title, index) => (
          <li key={index}>
            <Card
              title={title}
              description={descriptions[index]}
              img={images[index]}
              buttonText={buttonText}
              buttonLink={buttonLinks[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
