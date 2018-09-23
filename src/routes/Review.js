import React from "react";
import Article from "../components/Article";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";

export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedReview: Store.getState().selectedReview
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                selectedReview: Store.getState().selectedReview
            })
        })

        Store.dispatch(Middleware.fetchReview(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Article 
                title={this.state.selectedReview.title}
                src={this.state.selectedReview.source}
            />
        )
    }
}