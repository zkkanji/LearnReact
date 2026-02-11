import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from"./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const text = "Learn React";
  const names = ["Zain", "Kanji"]

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <br></br>
      <Alert>
        {text}
      </Alert>
      <Button names={names}/>
    </div>
  );
}

export default App;
