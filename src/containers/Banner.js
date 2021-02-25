import React from "react";
import DesktopBanner from "../components/DesktopBanner";
import MobileBanner from "../components/MobileBanner";

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            windowWidth: window.innerWidth
        };
        
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.windowWidth > 900 ?
                    <DesktopBanner />
                    :
                    <MobileBanner />
                }
            </div>
            
        )
    }
}