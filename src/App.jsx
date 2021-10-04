import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Categories from "./components/categories/categories";
import Products from "./components/products/products";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Categories />
                <Products />
            </div>
            <Footer />
        </div>
    );
}

export default App;
