import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/login';
import Todo from './components/Todo';

export default function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Routes>
  <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
  <Route path="/todo" element={<Todo />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}
