import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasonryLayout from 'react-masonry-layout'
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

export default class Publication extends Component {
    static propTypes = {

    };

    render() {
        const { item } = this.props;

        return (
            <article
                className="card"
                style={{
                    width: '400px',
                }}
            >
              <a href="#" className="link-unstyled d-block pa-30 pb-15">
                <h3 className="h3 mb-20 text-base">Война альраунов и альвов. Сказка с двумя финалами</h3>
                <p className="text-base">
                    {
                        item % 2 === 0
                        ?
                            <span>
                                Когда-то давным-давно, а может и не так уж давно, чтобы все об этом забыли, расстилался между высокими горами сказочный лес. У его опушки, на бескрайних полях жил волшебный народ - малюток альвов.<br/>Они были дружественны людям: помогали обрабатывать пастбища, пасти скот, занимались науками и ремёслами, прекрасно пели и своими песнями вдохновляли людей на создание произведений искусства. Поэтому люди часто входили в их пределы и посещали лес. Однажды один…
                            </span>
                        :
                            <span>
                                Когда-то давным-давно, а может и не так уж давно, чтобы все об этом забыли, расстилался между высокими горами сказочный лес. У его опушки, на бескрайних полях жил волшебный народ - малюток альвов.<br/>Они были дружественны людям: помогали обрабатывать пастбища, пасти скот, занимались науками и ремёслами, прекрасно пели и своими песнями вдохновляли людей на создание произведений искусства. Поэтому люди часто входили в их пределы и посещали лес. Однажды один…Когда-то давным-давно, а может и не так уж давно, чтобы все об этом забыли, расстилался между высокими горами сказочный лес. У его опушки, на бескрайних полях жил волшебный народ - малюток альвов.<br/>Они были дружественны людям: помогали обрабатывать пастбища, пасти скот, занимались науками и ремёслами, прекрасно пели и своими песнями вдохновляли людей на создание произведений искусства. Поэтому люди часто входили в их пределы и посещали лес. Однажды один…
                            </span>
                    }
                </p>
              </a>
              <a href="#" className="d-block pl-30 pr-30 text-quiet">Читати повністю…</a>
              <hr className="mb-15 mt-15"/>
              <div className="pa-20 pt-0">
                  <Link
                      to={`/authors/${item}`}
                      className='d-flex align-items-center trans mb-20'
                  >
                      <img src="/images/userpic.jpg" alt="Володимир Мірошниченко" className="userpic post-small-userpic mr-10"/>
                      <span className="text-truncate">Неоніла Володимирівна Гуменюк</span>
                  </Link>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="d-flex flex-grow flex-no-shrink text-bold">
                    <div className="text-muted mr-20" title="Перегляди">
                      <i className="icon-eye mr-4"></i><span className="text-sm">1056</span>
                    </div>
                    <a href="#" className="text-muted link-h-quiet trans mr-20" title="Коментарі">
                      <i className="icon-comment mr-4"></i><span className="text-sm">18</span>
                    </a>
                    <a href="#" className="stats-likes stats-is-liked trans mr-20" title="Вподобання">
                      <i className="icon-heart mr-4"></i><span className="text-sm">102</span>
                    </a>
                  </div>
                  <div className="text-sm text-muted">01.12.2017</div>
                </div>
              </div>
            </article>
        );
    }
}
