import React from "react";
import Article from "../components/Article";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBlog: Store.getState().selectedBlog
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                selectedBlog: Store.getState().selectedBlog
            })
        })

        Store.dispatch(Middleware.fetchBlog(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Article 
                title={this.state.selectedBlog.title}
                src={this.state.selectedBlog.source}
            />
        )
    }
}