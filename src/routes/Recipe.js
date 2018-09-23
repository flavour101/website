import React from "react";
import Article from "../components/Article";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRecipe: Store.getState().selectedRecipe
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                selectedRecipe: Store.getState().selectedRecipe
            })
        })

        Store.dispatch(Middleware.fetchRecipe(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Article 
                title={this.state.selectedRecipe.title}
                src={this.state.selectedRecipe.source} 
            />
        )
    }
}