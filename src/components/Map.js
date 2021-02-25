import React from 'react';
import styled from 'styled-components';

const StyledMap = styled.div`
    width: 100%;
    height: calc(70vh);
`;

export default class Map extends React.PureComponent {
  componentDidMount() {
    const latlng = new google.maps.LatLng(53.4799848, -2.2425126);

    const map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 13,
    });

    const markers = [];
    this.props.entries.forEach((entry) => {
      const infoString = `
            <style>
                .mapLink {
                    display: block;
                    margin-right: 10px;
                    font-size: 16px;
                    font-weight: bold;
                    text-decoration: none;
                    color: #333;
                }

                .mapLink:hover {
                    text-decoration: underline;
                }
            </style>
            <a class="mapLink" href="/reviews/${entry.id}">
                ${entry.title}
            </a>
            `;
      const infoWindow = new google.maps.InfoWindow({
        content: infoString,
      });
      const marker = new google.maps.Marker({
        position: {
          lat: entry.lat,
          lng: entry.long,
        },
        map: map,
      });
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    });
  }

  render() {
    return (
      <StyledMap id="map" />
    );
  }
}
