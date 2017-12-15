import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasonryLayout from 'react-masonry-layout'
import Masonry from 'react-masonry-component';

import Publication from '../components/Publication';

export default class SingleAuthorPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('SingleAuthorPage');
        // return (
        //     <div>asdfasdf</div>
        // );
        const sizes = [
            { columns: 1, gutter: 10 },
            { mq: '650px', columns: 1, gutter: 20 },
            { mq: '768px', columns: 2, gutter: 20 },
            { mq: '1270px', columns: 3, gutter: 20 },
            { mq: '1624px', columns: 4, gutter: 20 },
            { mq: '2024px', columns: 5, gutter: 20 },
            { mq: '2424px', columns: 6, gutter: 20 }
        ];

        return (
            <div className="content-body">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                      <section className="card pa-30 text-center profile-about">
                        <img src="/images/userpic.jpg" alt="Володимир Мірошниченко" className="userpic mb-30"/>
                        <h1 className="h3 mb-10">Володимир Мірошниченко</h1>
                        <span className="text-lg text-bold text-quiet text-truncate">@miroshnychenko</span>
                        <p className="text-lg mt-30">Україно, Україно! Серце моє, ненько! Як згадаю твою долю, заплаче серденько!</p>
                        <a className="btn btn-outline mt-30 mb-10" href="/settings/account" role="button"><i className="icon-edit text-lg mr-10"></i><span>Редагувати профіль</span></a>
                      </section>

                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link active" href="../">Твори (2)</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="../following">Читає (137)</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="../followers">Читачі (45)</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="../likes">Вподобання (215)</a>
                      </li>
                    </ul>

                    <section className="container mt-20">
                      <div className="row justify-content-center">
                        <MasonryLayout
                            id="masonry-layout"
                            infiniteScroll={this.loadItems}
                            sizes={sizes}
                        >
                            {
                                Array.from(Array(9).keys()).map(item => <Publication key={item} item={item}/>)
                            }
                        </MasonryLayout>

                      <div className="col-12 d-flex">
                        <button type="button" className="btn btn-outline mt-10 mb-50 mx-auto"><span>Показати ще...</span></button>
                      </div>
                    </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
