import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductsProvider from "./context/ProductsProvider";

function App() {
  return (
    <div>
      <ProductsProvider>
        <RouterProvider router={routes} />
      </ProductsProvider>
    </div>
  );
}

export default App;
