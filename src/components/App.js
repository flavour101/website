import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Banner from "../containers/Banner";
import Home from "../containers/Home";
import Reviews from "../containers/Reviews";
import Review from "../containers/Review";
import Blogs from "../containers/Blogs";
import Blog from "../containers/Blog";
import Recipes from "../containers/Recipes";
import Recipe from "../containers/Recipe";
import Gallery from "../containers/Gallery";

const Content = styled.div`
    margin: 0 auto 50vh auto;
    width: 100%;
    max-width: 1080px;
`

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/reviews" component={Reviews} />
                        <Route exact path="/reviews/:id" component={Review} />
                        <Route exact path="/blog" component={Blogs} />
                        <Route exact path="/blog/:id" component={Blog} />
                        <Route exact path="/recipes" component={Recipes} />
                        <Route exact path="/recipes/:id" component={Recipe} />
                        <Route exact path="/gallery" component={Gallery} />
                    </Switch>
                </Content>
            </div>
        )
    }
}
