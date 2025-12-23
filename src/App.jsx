import { Routes, Route } from "react-router-dom";
import './App.css';
import Services from "./containers/Services";

import ProductList from './containers/ProductList';
function App() {
   return (
    <div>
      <Routes>
        {/* الصفحة الرئيسية */}
         { <Route path="/" element={<Services />} />  }

        {/* صفحة المنتجات */}
        <Route
          path="/products" element={ <div>  <ProductList />  </div>  }
        />

        {/* صفحة لأي رابط غير موجود */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;



