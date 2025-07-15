// src/pages/Login.tsx
import {useState} from 'react'
import axios from '../api/axios'
import {useNavigate, Link} from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post('/auth/token/', {username, password})
            const token = response.data.access
            localStorage.setItem('access_token', token)
            setError('')
            navigate('/')
        } catch (err) {
            setError('Invalid username or password')
        }
    }

    return (
        <div className="layoutcontainer">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '85vh',
                backgroundColor: '#f9f9fb'
            }}>
                <form onSubmit={handleSubmit} style={{
                    background: '#fff',
                    padding: '48px',
                    borderRadius: '16px',
                    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)',
                    width: '560px',
                    maxWidth: '90%',
                    textAlign: 'center'
                }}>
                    <h2 style={{marginBottom: '32px', fontSize: '24px'}}>Login</h2>

                    <div style={{textAlign: 'left', marginBottom: '20px'}}>
                        <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '14px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    <div style={{textAlign: 'left', marginBottom: '20px'}}>
                        <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '14px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </div>

                    {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}

                    <button type="submit" style={{
                        marginTop: '20px',
                        width: '100%',
                        padding: '14px',
                        backgroundColor: '#6366f1',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        Login
                    </button>

                    <p style={{marginTop: '24px', fontSize: '14px'}}>
                        Don’t have an account?{' '}
                        <Link to="/register" style={{color: '#4a4aff', textDecoration: 'none', fontWeight: '500'}}>
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
