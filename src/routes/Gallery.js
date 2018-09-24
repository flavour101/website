import React from "react";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import PageHeader from "../components/PageHeader";
import ImageEntry from "../components/ImageEntry";
import {
    StyledPageTitle, StyledView
} from "../components/Stylings";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gallery: Store.getState().gallery
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                gallery: Store.getState().gallery
            })
        })

        Store.dispatch(Middleware.fetchGallery());
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
                <StyledView>
                    {
                        this.state.gallery.map(image => {
                            return (
                                <ImageEntry
                                    key={image.id}
                                    thumbnail={image.source}
                                    link={image.source} // TODO work out a different link for clicking images
                                />
                            )
                        })
                    }
                </StyledView>
            </div>
        )
    }
}
