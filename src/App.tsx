import AppRouter from './AppRouter';
import Header from './components/common/Header';

function App() {
  return (
    <div>
      <AppRouter>
        <Header></Header>
      </AppRouter>
    </div>
  );
}

export default App;
