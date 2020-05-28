import React,{useState} from 'react';
import { Form, Input, Button, Checkbox, notification} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {emailValidation, minLengthValidation} from './../../../utils/formValidation'

import {signInApi} from '../../../api/user'

import './RegisterForm.scss';

export default function RegisterForm(){

    const [inputs, setinputs] = useState({
        email: "",
        password: "",
        repeatPassword : "",
        privacyPolicy : false
    });
    const [formValid, setformValid] = useState({
        email: false,
        password: false,
        repeatPassword : false,
        privacyPolicy : false
    });

    const changeForm = e =>{
        if (e.target.name === "privacyPolicy"){
            setinputs({
                ...inputs,
                [e.target.name] : e.target.checked
            });
        }else{
            setinputs({
                ...inputs,
                [e.target.name] : e.target.value
            })
        }
    }

    const inputValidation = e =>{
        const {type, name} = e.target;

        if(type === 'email'){
            setformValid({  ...formValid, [name]: emailValidation(e.target) })
        }
        if(type === 'password'){
            setformValid({ ...formValid, [name] : minLengthValidation(e.target, 8)})
        }
        if(type === 'checkbox'){
            setformValid({ ...formValid, [name] : e.target.checked })
        }
    }

    const register = (e) =>{
        e.preventDefault();
        const {email, password, repeatPassword,privacyPolicy} = formValid;
        const nameValue=inputs.password;
        const passwordValue=inputs.password;
        const repeatPasswordValue = inputs.repeatPassword;
        const privacyPolicyValue = inputs.privacyPolicy;

        if(!nameValue || !passwordValue || !repeatPasswordValue || !privacyPolicyValue){
            notification['error']({
                message : "Todos los campos son Obligatorios"
            })
        }else{
            if(passwordValue !== repeatPasswordValue){
                notification['error']({
                    message : "Las Contraseñas no Coinciden"
                })
            }else{
                notification['success']({
                    message : "Cuenta creada correctamente"
                })
                //conectar con el api y registrar el usuario. validaciones del servidor
                const result = signInApi(inputs);
            }
        }
    }

    return (
        <Form className="register-form" onChange={changeForm} onSubmitCapture={register}>
            <Form.Item>
                <Input 
                    prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    type="email" 
                    name="email" 
                    placeholder="Correo electronico" 
                    className="register-form__input" 
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    className="register-form__input" 
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    type="password" 
                    name="repeatPassword" 
                    placeholder="Repetir Contraseña" 
                    className="register-form__input" 
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    onChange={inputValidation}
                    checked={inputs.privacyPolicy}
                >
                    Helido y acepto la politica de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button" >
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}