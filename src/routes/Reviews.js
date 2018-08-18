import React from "react";
import styled from "styled-components";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import Map from "../components/Map";
import SquareEntry from "../components/SquareEntry";

const StyledControls = styled.div`
    width: 100%;
    height: 80px;
`

const StyledControlSection = styled.div`
    display: inline-block;
    width: calc(100% / 3);
    height: 100%;
    vertical-align: top;
`

const StyledControlSectionRight = styled(StyledControlSection)`
    text-align: right;
`

const StyledSearch = styled.input`
    display: block;
    width: 100%;
    max-width: 270px;
    height: 40px;
    margin: 20px auto;
    border: 0;
    border-bottom: solid 1px #bbb;
    padding: 0;
    text-align: center;
    font-size: 20px;
    color: #333;
    transition: border 200ms;

    &::placeholder {
        color: #aaa;
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

const StyledButton = styled.div`
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 20%;
    width: 120px;
    background: #008000;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: background 200ms, box-shadow 200ms;
    
    &:hover {
        background: #007300;
    }

    &:active {
        box-shadow: 0 0 5px 5px rgba(0,0,0,0.2) inset;
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
                        <StyledControlSection>{/* EMPTY */}</StyledControlSection>
                        <StyledControlSection>
                            <StyledSearch placeholder="Search" onChange={this.onChangeSearch} value={this.state.search}></StyledSearch>
                        </StyledControlSection>
                        <StyledControlSectionRight>
                            <StyledButton onClick={this.onChangeDisplay}>View as {this.state.displayAsMap ? "List" : "Map"}</StyledButton>
                        </StyledControlSectionRight>
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
                                    <SquareEntry key={review.id} details={review} />
                                )
                            })
                }
            </div>
        )
    }
}
