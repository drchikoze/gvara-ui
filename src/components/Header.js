import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    static propsTypes = {
        location: PropTypes.object
    };

    render() {
        return(
            <header className='hidden-print'>
                <NavLink exact
                    to={'/'}
                    className='header-item'
                    activeClassName='header-item-active'
                    title='Твори'

                >
                    <i className='icon-posts'></i><span className='ml-10 hidden-xs-down'>Твори</span>
                </NavLink>
                <NavLink exact
                    to={'/authors'}
                    className='header-item'
                    activeClassName='header-item-active'
                    title='Автори'
                >
                    <i className='icon-authors'></i><span className='ml-10 hidden-xs-down'>Автори</span>
                </NavLink>
                {/* <a href='/' className='header-item header-item-active' title='Твори'><i className='icon-posts'></i><span className='ml-10 hidden-xs-down'>Твори</span></a>
                <a href='/authors' className='header-item' title='Автори'><i className='icon-authors'></i><span className='ml-10 hidden-xs-down'>Автори</span></a> */}

                <div className='d-inline-flex flex-grow' title='На головну'>
                    <a href='#' className='header-logo text-hide'><img src='/images/logo.svg' alt='Ґвара' />На головну</a>
                </div>
                <div className='dropdown d-inline-flex pl-10 pr-15' title='Володимир Мірошниченко'>
                    <a href='#' role='button' className='align-self-center' id='dropdownUserMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                    <img src='/images/userpic.jpg' alt='Володимир Мірошниченко' className='userpic'/>
                    </a>
                    <div className='hidden dropdown-menu dropdown-menu-right header-user-menu fade' aria-labelledby='dropdownUserMenuButton'>
                        <div className='pa-20 pt-10 pb-10 hidden-sm-up'>
                            <a href='#' role='button' className='btn btn-blue btn-block'><i className='icon-new-post text-lg mr-10'></i><span>Додати твір</span></a>
                        </div>
                        <hr className='dropdown-divider hidden-sm-up' />
                        <a className='dropdown-item' href='#'><i className='icon-user text-quiet mr-10'></i><span className='vam'>Володимир Мірошниченко</span></a>
                        <a className='dropdown-item' href='#'><i className='icon-heart text-quiet mr-10'></i><span className='vam'>Вподобані твори</span></a>
                        <a className='dropdown-item' href='#'><i className='icon-edit text-quiet mr-10'></i><span className='vam'>Налаштування</span></a>
                        <a className='dropdown-item' href='#'><i className='icon-exit text-quiet mr-10'></i><span className='vam'>Вийти</span></a>
                    </div>
                    <div className='dropdown-backdrop'></div>
                </div>
                <a href='#' className='header-item hidden-xs-down' title='Додати твір'><i className='icon-new-post'></i></a>
                <a href='#' className='header-item' title='Сповіщення'><i className='icon-notifications'></i></a>
            </header>
        );
    }
}
