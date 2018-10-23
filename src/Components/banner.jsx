import React from "react";
import Swiper from 'react-id-swiper';

export default class extends React.Component {
    render() {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
          };
        return (
            <Swiper {...params}>
                <div><p> Summer Collection 2018</p></div>
                <div><p>Winter Collection 2018</p></div>
                <div><p>Autumn Collection 2018</p></div>
            </Swiper>
        );
    }
}

const styles = {
    banner: {
    }
};