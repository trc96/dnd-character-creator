import Header from "./Header";
import Routes from "../Routes";

//styles
import './Styles/Home.css'

const Home = () => {

    return (
        <div className="website-background">
            <Header />
            <div className="character-container" onClick={''}>
                <h2>'Placeholder for name'</h2>
                <h3>'Placeholder for class'</h3>
                <div className="image-container">
                    <image src ="https://www.globalpharmatek.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg" alt="Placeholder for image" />
                </div>
            </div>
        </div>
    )
}
export default Home;