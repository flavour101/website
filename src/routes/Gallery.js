import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import PageHeader from "../components/PageHeader";
import {
    StyledPageTitle
} from "../components/Stylings";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: Store.getState().photos
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                photos: Store.getState().photos
            })
        })

        Store.dispatch(Middleware.fetchPhotos());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <PageHeader 
                    center={
                        <StyledPageTitle>Gallery</StyledPageTitle>
                    }
                />
            </div>
        )
    }
}
