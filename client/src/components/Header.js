import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';

class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with google </a></li>          
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="4" style={{ margin: '0 10px' }}>
                        User: { this.props.auth.name }
                    </li>,
                    <li key="5" style={{ margin: '0 10px' }}>
                        Email: { this.props.auth.emails }
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

        render(){
            return (
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={ this.props.auth ? '/surveys' : '/' } 
                            className="left brand-logo">
                            Emaily
                        </Link>
                        
                        <ul className="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            );
        }
}
function mapStateToProps({auth}){
    return { auth };
}


export default connect(mapStateToProps) (Header);