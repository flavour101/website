import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import SquareEntry from "../components/SquareEntry";
import {
    StyledPageTitle,
    StyledSearch,
    StyledView
} from "../components/Stylings";
import PageHeader from "../components/PageHeader";

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            recipes: Store.getState().recipes
        }

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                recipes: Store.getState().recipes
            })
        })

        Store.dispatch(Middleware.fetchRecipes());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <PageHeader 
                    left={
                        <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search} />
                    }
                    center={
                        <StyledPageTitle>Recipes</StyledPageTitle>
                    }
                />
                <StyledView>
                    {
                        this.state.recipes
                            .filter(recipe => recipe.title && recipe.title.toUpperCase().includes(this.state.search.toUpperCase()))
                            .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
                            .map(recipe => {
                                return (
                                    <SquareEntry
                                        key={recipe.id}
                                        link={"/recipes/" + recipe.id}
                                        thumbnail={recipe.thumbnail}
                                        title={recipe.title}
                                        subTitle={new Date(recipe.post_date).toLocaleDateString()}
                                    />
                                )
                            })
                    }
                </StyledView>
            </div>
        )
    }
}
