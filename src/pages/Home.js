import "./home.scss";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Footer from "../components/footer/Footer";

function Home() {
	return (
		<div className="home">
			<Header />
			<Intro />
			{/* <Footer /> */}
		</div>
	);
}

export default Home;