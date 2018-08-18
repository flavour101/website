import React from "react";
import styled from "styled-components";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import SquareEntry from "../components/SquareEntry";

const StyledControls = styled.div`
    width: 100%;
    height: 100px;
`

const StyledControlSection = styled.div`
    display: inline-block;
    width: calc(100% / 3);
    height: 100%;
    vertical-align: top;
`

const StyledSearch = styled.input`
    display: block;
    width: 100%;
    max-width: 270px;
    height: 50px;
    margin: 25px auto;
    border: 0;
    border-bottom: solid 1px #bbb;
    padding: 0;
    text-align: center;
    font-size: 20px;
    color: #333;
    transition: border 200ms;

    &::placeholder {
        color: #ccc;
        transition: color 200ms;
    }

    &:focus {
        outline: none;
        border-bottom: solid 1px #333;
    }

    &:focus::placeholder {
        color: transparent;
    }
`

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayAsMap: false,
            search: "",
            reviews: Store.getState().reviews
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
                        <StyledControlSection>{/* EMPTY */}</StyledControlSection>
                        <StyledControlSection>
                            <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search}></StyledSearch>
                        </StyledControlSection>
                        <StyledControlSection>Switch to Map Button</StyledControlSection>
                    </StyledControls>
                </div>
                {
                    this.state.displayAsMap ?
                        <Map entries={this.state.reviews} />
                        :
                        this.state.reviews
                            // .filter(review => review.location.includes(this.state.search))
                            .map(review => {
                                return (
                                    <SquareEntry details={review} />
                                )
                            })
                }
            </div>
        )
    }
}
