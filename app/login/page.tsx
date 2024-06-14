'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('user'))
                router.push('/');
        }
    }, []);

    const handleLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const storedEmail = 'user@gmail.com';
        const storedPassword = '111111';

        if (email === storedEmail && password === storedPassword) {
            // Successful login
            console.log('Login successful!');
            localStorage.setItem('user', email)
            router.push('/');
        } else {
            alert('Incorrect email or password.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-500">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className="text-purple-700 text-3xl font-bold mb-4">Trello</h2>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Sign in</button>
                </form>

                <a href="#" className="text-purple-500 underline text-sm mt-2">Forgot your password?</a>

                <div className="flex justify-between mt-4">
                    <p className="text-gray-700">Don't have an account?</p>
                    <a href="#" className="text-purple-500 underline text-sm">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;