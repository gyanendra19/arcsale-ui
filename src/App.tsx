import Home from "./components/Home";
import Layout from "./components/Layout";
import PricingTable from "./components/Pricing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<PricingTable />} />
      </Route>
    )
  );

  return (
    <main className="p-4">
      <RouterProvider router={route} />
    </main>
  );
}

export default App;
