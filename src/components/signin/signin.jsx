import React from 'react';
import Input from '../../components/input/input';
import CustomButton from '../../components/button/button';
import './signin.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state = {
            email: '',
            senha: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', senha: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='signin'>
                <h2>Já possui uma conta?</h2>
                <span>Entre com seu e-mail e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required handleChange={this.handleChange}
                        label='Email'
                    />
                    <Input 
                        name='senha' 
                        type='password' 
                        value={this.state.senha} 
                        required 
                        handleChange={this.handleChange}
                        label='Senha'
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Entrar</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Entrar com Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;