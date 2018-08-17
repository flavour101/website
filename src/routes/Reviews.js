import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: Store.getState().reviews
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                reviews: Store.getState().reviews
            })
        })

        Store.dispatch(Middleware.fetchReviews());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>Reviews</div>
        )
    }
}
