// src/components/Footer.tsx
import './Footer.css'
import logo from '../assets/home/logo.svg';

export function Footer() {
    return (
        <footer className="footer" style={{background: '#f5f6f8', padding: '56px 0 0 0', borderTop: '1px solid #e5e7eb', marginTop: 80}}>
            <div className="layoutcontainer" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48, paddingBottom: 32}}>
                {/* 左侧 Logo+简介 */}
                <div style={{flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <img src={logo} alt="Logo" style={{height: 130, width: 250, marginBottom: 12}} />
                    <div style={{color: '#666', fontSize: 16, textAlign: 'left', maxWidth: 320}}>
                        The leading art trading platform connects outstanding artworks with artists, providing a platform for excellent art to be displayed.
                    </div>
                </div>
                {/* 中间导航 */}
                <div style={{flex: 1, minWidth: 180, marginTop: 44}}>
                    <div style={{fontWeight: 600, fontSize: 18, marginBottom: 16}}>Navigation</div>
                    <div style={{color: '#444', fontSize: 16, lineHeight: 2}}>
                        <div><a href="/">Home</a></div>
                        <div><a href="/categories">Categories</a></div>
                        <div><a href="/contact">Contact</a></div>
                        <div><a href="/profile">Profile</a></div>
                    </div>
                </div>
                {/* 右侧联系方式 */}
                <div style={{flex: 1, minWidth: 180, marginTop: 44}}>
                    <div style={{fontWeight: 600, fontSize: 18, marginBottom: 16}}>Contact</div>
                    <div style={{color: '#444', fontSize: 16, lineHeight: 2}}>
                        <div>+86 1×× ×××× ××××</div>
                        <div>Lucas20100718@gmail.com</div>
                    </div>
                </div>
            </div>
            <div style={{borderTop: '1px solid #e5e7eb', marginTop: 24, padding: '18px 0 12px 0', color: '#888', fontSize: 15, textAlign: 'center'}}>
                © 2025 blend lumina. All rights reserved.
            </div>
        </footer>
    )
}
