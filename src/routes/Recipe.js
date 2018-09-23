import React from "react";
import Article from "../components/Article";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRecipe: Store.getState().selectedRecipe,
            markdown: Store.getState().markdown
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                selectedRecipe: Store.getState().selectedRecipe,
                markdown: Store.getState().markdown
            })
        })

        Store.dispatch(Middleware.fetchRecipe(this.props.match.params.id));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedRecipe.id !== prevState.selectedRecipe.id) {
            Store.dispatch(Middleware.fetchMarkdown(this.state.selectedRecipe.source));
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Article 
                title={this.state.selectedRecipe.title}
                src={this.state.selectedRecipe.source}
                markdown={this.state.markdown}
            />
        )
    }
}