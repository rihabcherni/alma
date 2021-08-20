import React from 'react';
import {  TextValidator} from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
class  ResetPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }
    handleChange(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user }); 
        const email = event.target.value;
        this.setState({ email });
    }
    handleSubmit() {
    }
    render() {
        const { user } = this.state;        
        const { email } = this.state;
        return (
        <>
            <ValidatorForm 
                onSubmit={this.handleSubmit}   
                ref="form"
                onError={errors => console.log(errors)}>
                <TextValidator
                    variant="outlined"
                    label="password*"
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.password}
                />
                <TextValidator variant="outlined"
                    label="Name*"
                    floatingLabelText="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={user.repeatPassword}
                />
                <TextValidator
                    variant="outlined"
                    floatingLabelText="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <input type="submit" />
            </ValidatorForm>
        </>
        );
    };
}
export default ResetPasswordForm;
