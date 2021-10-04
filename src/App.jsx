import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";

import Categories from "./components/categories";
import Products from "./components/products";

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
