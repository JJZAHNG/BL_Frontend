// src/pages/Register.tsx
import {useState} from 'react'
import axios from '../api/axios'
import {useNavigate, Link} from 'react-router-dom'

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'buyer',
    })

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post('/users/register/', formData)
            setError('')
            setSuccess(true)
            setTimeout(() => {
                navigate('/login')
            }, 1500)
        } catch (err: any) {
            if (err.response && err.response.data) {
                const data = err.response.data
                if (Array.isArray(data)) {
                    setError(data[0])
                } else if (typeof data === 'object') {
                    const firstField = Object.keys(data)[0]
                    const firstMessage = Array.isArray(data[firstField])
                        ? data[firstField][0]
                        : data[firstField]
                    setError(`${firstField}: ${firstMessage}`)
                } else {
                    setError('Registration failed. Unknown error format.')
                }
            } else {
                setError('Registration failed. Please try again.')
            }
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
                    <h2 style={{marginBottom: '32px', fontSize: '24px'}}>Register</h2>

                    <div style={{textAlign: 'left', marginBottom: '20px'}}>
                        <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Username</label>
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
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
                        <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
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
                        <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '14px',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        >
                            <option value="buyer">Buyer</option>
                            <option value="artist">Artist</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    {error && (
                        <div style={{
                            backgroundColor: '#ffe5e5',
                            color: '#b30000',
                            padding: '10px',
                            borderRadius: '6px',
                            marginTop: '12px',
                            fontSize: '14px'
                        }}>
                            {error}
                        </div>
                    )}

                    {success && (
                        <p style={{color: 'green', marginTop: '10px'}}>
                            Registered! Redirecting...
                        </p>
                    )}

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
                        Register
                    </button>

                    <p style={{marginTop: '24px', fontSize: '14px'}}>
                        Already have an account?{' '}
                        <Link to="/login" style={{color: '#4a4aff', textDecoration: 'none', fontWeight: '500'}}>
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
