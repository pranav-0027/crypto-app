import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Converter from './routes/converter/converter.component';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index={true} element={<Home />} />
       <Route  path='converter' element={<Converter/>}/>
    </Route>
  </Routes>
  );
}

export default App;
