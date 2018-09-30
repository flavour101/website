import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import Home from "../routes/Home";
import Reviews from "../routes/Reviews";
import Review from "../routes/Review";
import Blogs from "../routes/Blogs";
import Blog from "../routes/Blog";
import Recipes from "../routes/Recipes";
import Recipe from "../routes/Recipe";
import Gallery from "../routes/Gallery";

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
