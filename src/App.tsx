import Friends from './components/Friends/Friends';
import MainView from './components/MainView/MainView';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div style={{display:'flex', height: '100vh'}}>
      <Menu/>
      <MainView/>
      <Friends/>
    </div>
  );
}

export default App;
