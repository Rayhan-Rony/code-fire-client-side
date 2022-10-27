
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";




function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
