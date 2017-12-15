import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MasonryLayout from 'react-masonry-layout'
import Masonry from 'react-masonry-component';

import AuthorsCard from '../components/AuthorCard';

export default class AuthorsPage extends Component {
    static propTypes = {

    };

    render() {
        const sizes = [
            { columns: 1, gutter: 10 },
            { mq: '650px', columns: 2, gutter: 20 },
            { mq: '768px', columns: 3, gutter: 20 },
            { mq: '1270px', columns: 4, gutter: 20 },
            { mq: '1624px', columns: 5, gutter: 20 },
            { mq: '2024px', columns: 6, gutter: 20 },
            { mq: '2424px', columns: 7, gutter: 20 }
        ];

        return (
            <div className="content-body">

              <section className="card d-flex justify-content-center pa-6 brds-0">
                <div className="dropdown">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span>Найпопулярніші</span>
                  </button>
                  <div className="dropdown-menu fade" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item active" href="#"><span className="vam">Найпопулярніші</span></a>
                    <a className="dropdown-item" href="#"><span className="vam">Найбільш коментовані</span></a>
                  </div>
                  <div className="dropdown-backdrop"></div>
                </div>

                <div className="dropdown">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span>За 7 днів</span>
                  </button>
                  <div className="dropdown-menu fade" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item active" href="#"><span className="vam">Найпопулярніші</span></a>
                    <a className="dropdown-item" href="#"><span className="vam">Найбільш коментовані</span></a>
                  </div>
                  <div className="dropdown-backdrop"></div>
                </div>
              </section>

              <section className="container mt-20">
                <div className="row justify-content-center">
                        <MasonryLayout
                            id="masonry-layout"
                            infiniteScroll={this.loadItems}
                            sizes={sizes}
                        >
                            {
                                Array.from(Array(9).keys()).map(item => <AuthorsCard key={item} item={item}/>)
                            }
                        </MasonryLayout>
                      <div className="col-12 d-flex">
                        <button type="button" className="btn btn-outline mt-10 mb-50 mx-auto"><span>Показати ще...</span></button>
                      </div>
                </div>
              </section>
            </div>
        );
    }
}
