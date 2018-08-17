import React from "react";
import styled from "styled-components";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import SquareEntry from "../components/SquareEntry";

const StyledControls = styled.div`
    width: 100%;
    height: 100px;
    background: black;
`

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayAsMap: false,
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
            <div>
                <div>
                    <StyledControls></StyledControls>
                </div>
                {
                    this.state.displayAsMap ?
                        <Map entries={this.state.reviews} />
                        :
                        this.state.reviews
                            .map(review => {
                                return (
                                    <SquareEntry details={review}/>
                                )
                            })
                }
            </div>
        )
    }
}
