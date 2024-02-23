import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Cairo", "Giza", "Alexandria", "Luxor", "Hurghada"];
  let carsBrands = ["Porsche", "Ford", "Honda", "BMW", "Audi"];

  return (
    <div>
      <ListGroup items={items} heading="Egypt Cities" />

      <ListGroup items={carsBrands} heading="Cars " />
    </div>
  );
}

export default App;
