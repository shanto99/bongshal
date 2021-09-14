import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <Categories/>
            </React.Fragment>
        );
    }
}

export default Home;
