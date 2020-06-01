import React from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Block } from '../../components/ComponentsExports'
import { Link } from 'react-router-dom'


const LoginForm = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div className='auth__top'>
                <h2>Login</h2>
                <p>Please, log into your account</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className='button_large' type={'primary'} size={'large'}>login</Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/register'>Register</Link>
                </Form>
            </Block>
        </div>
    )
}

export default LoginForm

