import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/history/" element={<History />} />
        <Route path="/settings/" element={<Settings />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
