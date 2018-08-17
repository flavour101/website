import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: Store.getState().recipes
        }
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
            <div>Recipes</div>
        )
    }
}
