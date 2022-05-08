import GameProvider from "./components/Game/GameProvider";
import Header from "./components/Layout/Header";
import Heroes from "./components/Heroes/Heroes";

function App() {
  return (
    <GameProvider>
      <Header />
      <main>
        <Heroes />
      </main>
    </GameProvider>
  );
}

export default App;
