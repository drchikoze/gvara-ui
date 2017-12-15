import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasonryLayout from 'react-masonry-layout'
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

export default class AuthorsCard extends Component {
    static propTypes = {

    };

    render() {
        const { item } = this.props;

        return (
            <div
                className="pb-20"
                key={item}
                style={{
                    width: '300px'
                }}
            >
                <div className="card pa-30 text-center author mb-0">
                    <Link
                        to={`/authors/${item}`}
                    >
                        <img src="/images/userpic.jpg" alt="Володимир Мірошниченко" className="userpic mb-20"/>
                    </Link>
                    <Link
                        to={`/authors/${item}`}
                        className='h4 text-base link-h-base d-block mb-4'
                    >
                        Володимир Мірошниченко
                    </Link>
                    <Link
                        to={`/authors/${item}`}
                        className='text-md text-bold text-quiet link-h-quiet d-block text-truncate4'
                    >
                        @miroshnychenko
                    </Link>
                    <p className="text-md mt-20">
                        {
                            item % 2 === 0
                            ?
                                <span>
                                    Україно, Україно! Серце моє, ненько! Як згадаю твою долю, заплаче серденько!
                                </span>
                            :
                                <span>
                                    Когда-то давным-давно, а может и не так уж давно, чтобы все об этом забыли, расстилался между высокими горами сказочный лес. У его опушки, на бескрайних полях жил волшебный народ - малюток альвов.<br/>Они были дружественны людям: помогали обрабатывать пастбища, пасти скот, занимались науками и ремёслами, прекрасно пели и своими песнями вдохновляли людей на создание произведений искусства. Поэтому люди часто входили в их пределы и посещали лес. Однажды один…Когда-то давным-давно...
                                </span>
                        }
                    </p>
                    <a href="#" role="button" className="btn btn-outline mt-20" ><i className="icon-add text-lg mr-10"></i><span>Читати автора</span></a>
                </div>
            </div>
        );
    }
}
