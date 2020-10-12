import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                LOJA
            </Link>
            <Link className='option' to='/contato'>
                CONTATO
            </Link>
            {
                currentUser ? 
                    (
                        <div className='option' onClick={() => auth.signOut()}>
                            SAIR
                        </div>
                    )
                : 
                    <Link className='option' to='/login'>
                        ENTRAR
                    </Link>
            }
            
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);