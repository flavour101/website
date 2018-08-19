import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import SquareEntry from "../components/SquareEntry";
import {
    StyledControls,
    StyledControlSection,
    StyledControlSectionRight,
    StyledPageTitle,
    StyledSearch,
    StyledView
} from "../components/Stylings";

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
                <div>
                    <StyledControls>
                        <StyledControlSection>
                            <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search} />
                        </StyledControlSection>
                        <StyledControlSection>
                            <StyledPageTitle>Recipes</StyledPageTitle>
                        </StyledControlSection>
                        <StyledControlSectionRight>
                            {/* TODO: implement a dropdown that filters by tag */}
                        </StyledControlSectionRight>
                    </StyledControls>
                </div>
                <StyledView>
                    {
                        this.state.recipes
                            .filter(recipe => recipe.dish && recipe.dish.toUpperCase().includes(this.state.search.toUpperCase()))
                            .sort((a, b) => a.postDate - b.postDate)
                            .map(recipe => {
                                return (
                                    <SquareEntry
                                        key={recipe.id}
                                        link={"/recipes/" + recipe.id}
                                        thumbnail={recipe.thumbnail}
                                        title={recipe.dish}
                                        subTitle={new Date(recipe.postDate).toLocaleDateString()}
                                    />
                                )
                            })
                    }
                </StyledView>
            </div>
        )
    }
}
