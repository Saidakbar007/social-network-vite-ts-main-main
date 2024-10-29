import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import SubscriptionsList from "../../components/UI/SubscriptionsList/SubscriptionsList";
import WhatsNewBox from "../../components/UI/WhatsNewBox/WhatsNewBox";
import Post from "../../components/UI/Post/Post";
import Navbar from "../../components/UI/Navbar/Navbar";

export const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <Header />
      <div className="MainPageContent">
        <Navbar />
        <main className="Main">
          <WhatsNewBox />
          <Post />
          <SubscriptionsList />
        </main>
      </div>
    </div>
  );
};
