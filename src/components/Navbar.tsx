// src/components/Navbar.tsx
import {Link} from 'react-router-dom'
import './Navbar.css'
import {useAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/home/logo.svg';

export function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="layoutcontainer">
                <div className="navbar-inner" style={{gap: 32, justifyContent: 'space-between'}}>
                    {/* 只显示 Logo，不带文字，不跳转 */}
                    <img src={logo} alt="Logo" style={{height: 80, width: 180, display: 'block'}} />
                    {/* 右侧菜单等 */}
                    <div style={{display: 'flex', alignItems: 'center', gap: 32}}>
                        <ul className="nav-links" style={{gap: 24}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/artworks">Categories</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/history">History</Link></li>
                        </ul>
                        <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
                            <input
                                type="text"
                                placeholder="Search"
                                style={{
                                    width: 220,
                                    padding: '8px 16px',
                                    borderRadius: 20,
                                    border: '1px solid #eee',
                                    background: '#f7f8fa',
                                    outline: 'none',
                                    fontSize: 15,
                                }}
                            />
                            <ul className="nav-links" style={{gap: 16}}>
                                {user ? (
                                    <li>
                                        <Link to="/profile" className="nav-username">{user.username}</Link>
                                    </li>
                                ) : (
                                    <>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register"><span style={{background:'#000',color:'#fff',borderRadius:16,padding:'4px 16px'}}>Register</span></Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
