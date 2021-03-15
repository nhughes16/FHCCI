import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaffInfo from './aboutUs/StaffComponent';
import NewsAlert from './NewsComponent';
import Header from './HeaderComponent';
import { STAFF } from '../shared/staff';
import { NEWS } from '../shared/news';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            staff: STAFF,
            news: NEWS
        }
    }

    render() {
        return (
            <div>
                <NewsAlert  news={this.state.news}  />
                <Header />
                <Switch>
                    <Route path='/home' />
                    <Route path='/staffDirectory' render={() => <StaffInfo staff={this.state.staff} />} />
                    <Redirect to='/staffDirectory' />
                </Switch>
            </div>
        );
    }
}

export default Main;