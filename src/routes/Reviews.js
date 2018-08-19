import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import Map from "../components/Map";
import SquareEntry from "../components/SquareEntry";
import {
    StyledControls,
    StyledControlSection,
    StyledControlSectionRight,
    StyledPageTitle,
    StyledSearch,
    StyledButton,
    StyledView
} from "../components/Stylings";

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayAsMap: false,
            search: "",
            reviews: Store.getState().reviews
        }

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onChangeDisplay = this.onChangeDisplay.bind(this);
    }

    onChangeSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    onChangeDisplay() {
        this.setState({
            displayAsMap: !this.state.displayAsMap
        })
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
            <div>
                <div>
                    <StyledControls>
                        <StyledControlSection>
                            <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search} />
                        </StyledControlSection>
                        <StyledControlSection>
                            <StyledPageTitle>Reviews</StyledPageTitle>
                        </StyledControlSection>
                        <StyledControlSectionRight>
                            <StyledButton onClick={this.onChangeDisplay}>View as {this.state.displayAsMap ? "List" : "Map"}</StyledButton>
                        </StyledControlSectionRight>
                    </StyledControls>
                </div>
                <StyledView>
                    {
                        this.state.displayAsMap ?
                            <Map entries={this.state.reviews} />
                            :
                            this.state.reviews
                                .filter(review => review.location && review.location.toUpperCase().includes(this.state.search.toUpperCase()))
                                .sort((a, b) => a.reviewDate - b.reviewDate)
                                .map(review => {
                                    return (
                                        <SquareEntry
                                            key={review.id}
                                            link={"/reviews/" + review.id}
                                            thumbnail={review.thumbnail}
                                            title={review.location}
                                            subTitle={new Date(review.reviewDate).toLocaleDateString()}
                                        />
                                    )
                                })
                    }
                </StyledView>
            </div>
        )
    }
}
