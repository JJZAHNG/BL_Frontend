import React from 'react';
import foundersImg from '../assets/aboutus/aboutus.jpg';

export default function AboutUs() {
    return (
        <div className="layoutcontainer" style={{paddingTop: 0, paddingBottom: 0}}>
            {/* Banner 区域 */}
            <div
                style={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    height: 220,
                    background: '#f5f5f5',
                    marginBottom: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{position: 'relative', zIndex: 2, textAlign: 'center', width: '100%'}}>
                    <h1 style={{fontSize: 48, fontWeight: 700, color: '#222', marginBottom: 12}}>About Us</h1>
                    <div style={{fontSize: 20, color: '#444', fontWeight: 400}}>Learn more about Blend Lumina and our mission</div>
                </div>
            </div>
            {/* 主体内容 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 48, marginBottom: 60}}>
                {/* 平台简介和愿景 */}
                <div style={{flex: 1, minWidth: 320}}>
                    <div style={{fontWeight: 700, fontSize: 28, marginBottom: 18}}>Our Story</div>
                    <div style={{fontSize: 17, color: '#333', marginBottom: 28, lineHeight: 1.8}}>
                        Blend Lumina is a next-generation art trading platform dedicated to connecting outstanding artworks with passionate collectors and artists worldwide. Our mission is to make art accessible, transparent, and enjoyable for everyone.<br/><br/>
                        We believe in the power of creativity and community. By leveraging technology and a deep understanding of the art world, we strive to provide a seamless, secure, and inspiring experience for all users.
                    </div>
                    <div style={{fontWeight: 700, fontSize: 22, marginBottom: 12}}>Our Vision</div>
                    <div style={{fontSize: 16, color: '#555', marginBottom: 32, lineHeight: 1.7}}>
                        To become the most trusted and innovative platform for art trading, empowering artists and collectors to connect, share, and grow together.
                    </div>
                </div>
                {/* 创始人介绍和合影 */}
                <div style={{flex: 1, minWidth: 380, background: '#fafbfc', borderRadius: 16, padding: '36px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
                    <div style={{fontWeight: 700, fontSize: 22, marginBottom: 18}}>Founders</div>
                    {/* 创始人合影图片 */}
                    <div style={{width: '100%', height: 480, borderRadius: 12, overflow: 'hidden', marginBottom: 24, background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={foundersImg} alt="Founders" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12}} />
                    </div>
                    <div style={{marginBottom: 18}}>
                        <div style={{fontWeight: 600, fontSize: 17}}>Bruce Lu</div>
                        <div style={{color: '#666', fontSize: 15, marginBottom: 6}}>Co-Founder & CEO</div>
                        <div style={{fontSize: 15, color: '#444', lineHeight: 1.7}}>
                            Bruce is passionate about art and technology, with years of experience in product design and entrepreneurship. He leads Blend Lumina with a vision to bridge the gap between artists and collectors.
                        </div>
                    </div>
                    <div>
                        <div style={{fontWeight: 600, fontSize: 17}}>Lucas Lu</div>
                        <div style={{color: '#666', fontSize: 15, marginBottom: 6}}>Co-Founder & CTO</div>
                        <div style={{fontSize: 15, color: '#444', lineHeight: 1.7}}>
                            Lucas is a tech enthusiast and full-stack developer, dedicated to building robust and user-friendly platforms. He ensures Blend Lumina delivers a seamless experience for all users.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 