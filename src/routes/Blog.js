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

export default class Blog extends React.Component {
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
                <div>
                    <StyledControls>
                        <StyledControlSection>
                            <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search} />
                        </StyledControlSection>
                        <StyledControlSection>
                            <StyledPageTitle>Blog</StyledPageTitle>
                        </StyledControlSection>
                        <StyledControlSectionRight>

                        </StyledControlSectionRight>
                    </StyledControls>
                </div>
                <StyledView>
                    {
                        this.state.blogs
                            .filter(blog => blog.title && blog.title.toUpperCase().includes(this.state.search.toUpperCase()))
                            .sort((a, b) => a.postDate - b.postDate)
                            .map(blog => {
                                return (
                                    <SquareEntry
                                        key={blog.id}
                                        link={"/reviews/" + blog.id}
                                        thumbnail={blog.thumbnail}
                                        title={blog.title}
                                        subTitle={new Date(blog.postDate).toLocaleDateString()}
                                    />
                                )
                            })
                    }
                </StyledView>
            </div>
        )
    }
}
