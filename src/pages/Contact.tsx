import React from 'react';

export default function Contact() {
    return (
        <div className="layoutcontainer" style={{paddingTop: 0, paddingBottom: 0}}>
            {/* Banner 区域（左右撑满全屏） */}
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
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80" alt="banner" style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: 1}} />
                <div style={{position: 'relative', zIndex: 2, textAlign: 'center', width: '100%'}}>
                    <h1 style={{fontSize: 48, fontWeight: 700, color: '#fff', marginBottom: 12}}>Get in Touch</h1>
                    <div style={{fontSize: 20, color: '#fff', fontWeight: 400, textShadow: '0 2px 12px rgba(0,0,0,0.18)'}}>We’re here to help you with any questions about our art trading platform</div>
                </div>
            </div>
            {/* 主体内容 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 48, marginBottom: 60}}>
                {/* 左侧联系信息 */}
                <div style={{flex: 1, minWidth: 320}}>
                    <div style={{fontWeight: 600, fontSize: 22, marginBottom: 32}}>Contact information</div>
                    <div style={{marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16}}>
                        <span style={{fontSize: 20}}>📞</span>
                        <div>
                            <div style={{fontWeight: 500, fontSize: 16}}>Phone</div>
                            <div style={{color: '#444', fontSize: 15, marginTop: 2}}>+86 1XX XXXX XXXX</div>
                        </div>
                    </div>
                    <div style={{marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16}}>
                        <span style={{fontSize: 20}}>✉️</span>
                        <div>
                            <div style={{fontWeight: 500, fontSize: 16}}>Email</div>
                            <div style={{color: '#444', fontSize: 15, marginTop: 2}}>Lucas20100718@gmail.com</div>
                        </div>
                    </div>
                    <div style={{marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16}}>
                        <span style={{fontSize: 20}}>📍</span>
                        <div>
                            <div style={{fontWeight: 500, fontSize: 16}}>Address</div>
                            <div style={{color: '#444', fontSize: 15, marginTop: 2}}>blend lumina, Gallery Street<br/>New York, NY 10001</div>
                        </div>
                    </div>
                </div>
                {/* 右侧表单 */}
                <div style={{flex: 1, minWidth: 380, background: '#fafbfc', borderRadius: 16, padding: '36px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
                    <div style={{fontWeight: 600, fontSize: 20, marginBottom: 24}}>Send us a message</div>
                    <form>
                        <div style={{display: 'flex', gap: 16, marginBottom: 18}}>
                            <div style={{flex: 1}}>
                                <div style={{fontWeight: 500, fontSize: 15, marginBottom: 6}}>Name</div>
                                <input type="text" placeholder="Your name" style={{width: '100%', padding: '12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15}} />
                            </div>
                            <div style={{flex: 1}}>
                                <div style={{fontWeight: 500, fontSize: 15, marginBottom: 6}}>Name</div>
                                <input type="email" placeholder="Your@email.com" style={{width: '100%', padding: '12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15}} />
                            </div>
                        </div>
                        <div style={{marginBottom: 18}}>
                            <div style={{fontWeight: 500, fontSize: 15, marginBottom: 6}}>Subject</div>
                            <input type="text" placeholder="How can we help?" style={{width: '100%', padding: '12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15}} />
                        </div>
                        <div style={{marginBottom: 24}}>
                            <div style={{fontWeight: 500, fontSize: 15, marginBottom: 6}}>Message</div>
                            <textarea placeholder="Tell us more about your inquiry..." style={{width: '100%', minHeight: 80, padding: '12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15, resize: 'vertical'}} />
                        </div>
                        <button type="submit" style={{width: '100%', background: '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontWeight: 600, fontSize: 17, cursor: 'pointer'}}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 