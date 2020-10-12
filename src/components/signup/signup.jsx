import React from 'react';
import Input from '../../components/input/input';
import CustomButton from '../../components/button/button';
import './signup.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('senhas nao batem');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return(
            <div className='signup'>
                <h2 className='title'>Não possui uma conta?</h2>
                <span>Registre-se abaixo</span>

                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <Input 
                        name='displayName' 
                        type='text' 
                        value={displayName} 
                        required 
                        handleChange={this.handleChange}
                        label='Nome'
                    />
                    <Input 
                        name='email' 
                        type='email' 
                        value={email} 
                        required 
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <Input 
                        name='password' 
                        type='password' 
                        value={password} 
                        required 
                        handleChange={this.handleChange}
                        label='Senha'
                    />
                    <Input 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        required 
                        handleChange={this.handleChange}
                        label='Repetir Senha'
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Registrar</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;