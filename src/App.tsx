import Button from "./components/Button";
import Text from "./components/Text";
import "./styles/index.css";

function App() {
  return (
    <>
      <Button color="green" size="2xl">
        클릭하세요.
      </Button>
      <Text size="lg">텍스트를 입력합니다.</Text>
    </>
  );
}

export default App;
