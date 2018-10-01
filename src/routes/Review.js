import React from "react";
import Article from "../components/Article";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";
import Actions from "../redux/Actions";

export default class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedReview: Store.getState().selectedReview,
            markdown: Store.getState().markdown
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                selectedReview: Store.getState().selectedReview,
                markdown: Store.getState().markdown
            })
        })

        Store.dispatch(Middleware.fetchReview(this.props.match.params.id));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedReview.id !== prevState.selectedReview.id) {
            Store.dispatch(Middleware.fetchMarkdown(this.state.selectedReview.source));
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
        Store.dispatch(Actions.setSelectedReview({}));
        Store.dispatch(Actions.setMarkdown(""));
    }

    render() {
        return (
            <Article 
                title={this.state.selectedReview.title}
                src={this.state.selectedReview.source}
                markdown={this.state.markdown}
            />
        )
    }
}