import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import ContentHeader from "./components/ContentHeader";
import ContentItems from "./components/ContentItems";
import RelatedDeals from "./components/RelatedDeals";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <div className="bg-light p-1">
        <div className="container main-container content-container">
          <ContentHeader />
          <ContentItems />
          <RelatedDeals />

          <SignUp/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
