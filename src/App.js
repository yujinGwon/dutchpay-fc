import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';
import { Test } from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import { ROUTES } from './routes';

const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.CREATE_GROUP} />} />
        <Route path={ROUTES.CREATE_GROUP} element={<CreateGroup />} />
        <Route path={ROUTES.ADD_MEMBERS} element={<AddMembers />} />
        <Route path={ROUTES.EXPENSE_MAIN} element={<ExpenseMain />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);

export default App;
