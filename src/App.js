import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RoutingRoutes } from './routing/routes';
import Loader from './components/loader/loader';
import { Suspense } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />

      <Router>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          {RoutingRoutes?.map((item) => {
            return (
              <Route path={item.path} element={<Suspense fallback={<Loader />}>
                {item?.element}
              </Suspense>} />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
