import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: Store.getState().blogs
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                blogs: Store.getState().blogs
            })
        })

        Store.dispatch(Middleware.fetchBlogs());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>Blog</div>
        )
    }
}
