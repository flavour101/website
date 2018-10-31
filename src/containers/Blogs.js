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

export default class Blogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            blogs: Store.getState().blogs
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
            <div>
                <PageHeader
                    left={
                        <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search} />
                    } 
                    center={
                        <StyledPageTitle>Blog</StyledPageTitle>
                    }
                />
                <StyledView>
                    {
                        this.state.blogs
                            .filter(blog => blog.title && blog.title.toUpperCase().includes(this.state.search.toUpperCase()))
                            .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
                            .map(blog => {
                                return (
                                    <SquareEntry
                                        key={blog.id}
                                        link={"/blog/" + blog.id}
                                        thumbnail={blog.thumbnail}
                                        title={blog.title}
                                        subTitle={new Date(blog.post_date).toLocaleDateString()}
                                    />
                                )
                            })
                    }
                </StyledView>
            </div>
        )
    }
}
