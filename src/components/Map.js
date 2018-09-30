import React from "react";
import styled from "styled-components";

const StyledMap = styled.div`
    width: 100%;
    height: calc(70vh);
`

export default class Map extends React.Component {
    componentDidMount() {
        let latlng = new google.maps.LatLng(53.4879778, -2.239773);
        
        new google.maps.Map(document.getElementById("map"), {
            center: latlng,
            zoom: 8
        });
    }

    render() {
        return (
            <StyledMap id="map" />
        )
    }
}