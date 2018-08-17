import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import SquareEntry from "../components/SquareEntry";

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
                <div>Display Picker</div>
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
