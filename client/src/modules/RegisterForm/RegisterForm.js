import React from 'react'
import { Form,Input} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined,InfoCircleTwoTone } from '@ant-design/icons';
import { Button, Block } from '../../components/ComponentsExports'
import { Link } from 'react-router-dom'


const RegisterForm = () => {

    const isRegisted = false


    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div className='auth__top'>
                <h2>Register</h2>
                <p>Please, register to begin chatting with other users.</p>
            </div>
            <Block>
                {isRegisted?
                <div className='auth__success_block'>
                    <div><InfoCircleTwoTone style={{fontSize:'50px'}} /></div>
                    <h2>Verify your e-mail to finish registration</h2>
                    <p>you should have received an email from us by now.</p>
                </div>
                :
                <Form
                    name="normal_login"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!', whitespace: false }, { min: 5, message: 'Username must be minimum 5 characters long.' },]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',

                            },
                            { min: 5, message: 'Password must be minimum 5 characters long.' }
                        ]}
                        hasFeedback
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item >
                            <Button htmlType="submit" className='button_large' type={'primary'} size={'large'}>register</Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/login'>Login</Link>
                </Form>
                }
                
            </Block>
        </div>
    )
}

export default RegisterForm

