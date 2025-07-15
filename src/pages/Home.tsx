import {useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
// import axios from "../api/axios";
import banner from '../assets/home/banner.svg';
import art1 from '../assets/home/art1.svg';
import art2 from '../assets/home/art2.svg';
import art3 from '../assets/home/art3.svg';
import art4 from '../assets/home/art4.svg';
import art5 from '../assets/home/art5.svg';
import art6 from '../assets/home/art6.svg';

type Category = {
    id: number;
    name: string;
};

// 固定分类数据
const homeCategories = [
    { id: 1, name: 'Painting', image: '/src/assets/home/Painting.svg' },
    { id: 2, name: '3D Art/Sculpture', image: '/src/assets/home/3DCard.svg' },
    { id: 3, name: 'Trendy Toys', image: '/src/assets/home/TrendyTOys.svg' },
    { id: 4, name: 'Peripherals', image: '/src/assets/home/PeripheralsCard.svg' },
    { id: 5, name: 'Handicrafts', image: '/src/assets/home/HandicraftCard.svg' },
];

// 价格区间数据
const priceRanges = [
    { label: 'Below $150', desc: 'Affordable art pieces' },
    { label: '$150–$750', desc: 'Mid-range collections' },
    { label: '$750–$1,250', desc: 'Premium artworks' },
    { label: '$1,250–$2,500', desc: 'Luxury pieces' },
    { label: 'Above $2,500', desc: 'Exclusive masterpieces' },
];

const featuredImages = [art1, art2, art3, art4, art5, art6];

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            {/* 顶部横幅 Banner，撑满全屏 */}
            <div
                style={{
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    overflow: 'hidden',
                    background: '#f5f5f5',
                }}
            >
                <img
                    src={banner}
                    alt="Banner"
                    style={{
                        width: '100%',
                        height: 360,
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </div>
            <div className="layoutcontainer container-padding">
                {/* 分类卡片区块 */}
                <section style={{marginBottom: 48,  marginTop:58} }>
                    <div style={{display: 'flex', gap: 32, justifyContent: 'center'}}>
                        {homeCategories.map((cat, idx) => (
                            <div key={cat.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 260}}>
                                <div
                                    className="artwork-card"
                                    style={{
                                        width: 260,
                                        height: 340,
                                        padding: 0,
                                        overflow: 'hidden',
                                        position: 'relative',
                                        borderRadius: 24,
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                        background: '#fff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 24,
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            zIndex: 1,
                                        }}
                                    />
                                    {/* 黑色渐变蒙层 */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0,
                                        borderRadius: 24,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.7) 100%)',
                                        zIndex: 2,
                                    }} />
                                    {/* 文字 */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        zIndex: 3,
                                        padding: '0 0 22px 20px',
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: 20,
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                    }}>
                                        {cat.name}
                                    </div>
                                </div>
                                {/* 只显示一个价格区间小卡片，对应顺序 */}
                                <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 18, width: 260}}>
                                    <div
                                        style={{
                                            background: '#fff',
                                            border: '1.5px solid #e5e7eb',
                                            borderRadius: 16,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                            padding: '18px 20px 14px 20px',
                                            minHeight: 60,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            width: '100%',
                                        }}
                                    >
                                        <div style={{fontWeight: 700, fontSize: 16, marginBottom: 4}}>{priceRanges[idx].label}</div>
                                        <div style={{fontSize: 13, color: '#666'}}>{priceRanges[idx].desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Artworks 区块 */}
                <section style={{margin: '64px 0 0 0'}}>
                    <h2 style={{textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 8}}>Featured Artworks</h2>
                    <div style={{textAlign: 'center', color: '#666', fontSize: 17, marginBottom: 40}}>
                        Handpicked masterpieces from our collection
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 36,
                        width: '100%',
                        margin: '0 auto 40px auto',
                    }}>
                        {featuredImages.map((img, i) => (
                            <div key={i} style={{
                                background: 'transparent',
                                borderRadius: 0,
                                boxShadow: 'none',
                                overflow: 'visible',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: 0,
                            }}>
                                <img
                                    src={img}
                                    alt="Artwork"
                                    style={{
                                        width: 400,
                                        height: 400,
                                        objectFit: 'cover',
                                        borderRadius: 24,
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                        background: '#fff',
                                        display: 'block',
                                    }}
                                />
                                <div style={{
                                    width: 320,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginTop: 18,
                                    padding: 0,
                                }}>
                                    <div style={{fontWeight: 600, fontSize: 20, marginBottom: 4}}>Abstract Composition</div>
                                    <div style={{color: '#888', fontSize: 15, marginBottom: 8}}>by Vincent Artist</div>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <div style={{fontWeight: 700, fontSize: 22}}>$5,500</div>
                                        <button style={{
                                            background: '#000',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 18,
                                            padding: '8px 32px',
                                            fontWeight: 600,
                                            fontSize: 16,
                                            cursor: 'pointer',
                                            marginLeft: 12,
                                        }}>View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button
                            onClick={() => window.location.href='/artworks'}
                            style={{
                                border: '1.5px solid #222',
                                background: '#fff',
                                color: '#222',
                                borderRadius: 24,
                                padding: '12px 32px',
                                fontWeight: 600,
                                fontSize: 17,
                                cursor: 'pointer',
                                marginTop: 8,
                            }}
                        >
                            View more artworks
                        </button>
                    </div>
                </section>
               
            </div>
        </>
    );
}
