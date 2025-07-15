import cateBanner from '../assets/categories/cate_banner.svg';
import art1 from '../assets/home/art1.svg';
import art2 from '../assets/home/art2.svg';
import art3 from '../assets/home/art3.svg';
import art4 from '../assets/home/art4.svg';
import art5 from '../assets/home/art5.svg';
import art6 from '../assets/home/art6.svg';

const images = [art1, art2, art3, art4, art5, art6];

export default function Categories() {
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
                    src={cateBanner}
                    alt="Banner"
                    style={{
                        width: '100%',
                        height: 220,
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
                {/* Banner 文字覆盖 */}
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textShadow: '0 2px 12px rgba(0,0,0,0.18)',
                }}>
                    <h1 style={{fontSize: 48, fontWeight: 700, marginBottom: 12}}>Browse Categories</h1>
                    <div style={{fontSize: 20, fontWeight: 400}}>Explore our comprehensive collection with detailed classifications</div>
                </div>
            </div>
            {/* 主体内容 */}
            <div className="layoutcontainer" style={{display: 'flex', alignItems: 'flex-start', marginTop: 32, marginBottom: 64}}>
                {/* 筛选栏 */}
                <aside style={{width: 220, marginRight: 36}}>
                    <div style={{fontWeight: 600, fontSize: 18, marginBottom: 18}}>Filters</div>
                    <div style={{color: '#222', fontWeight: 500, marginBottom: 8}}>Theme Classification</div>
                    <div style={{marginBottom: 16}}>
                        <div><input type="checkbox" /> Painting</div>
                        <div><input type="checkbox" /> 3D/2D Art</div>
                        <div><input type="checkbox" /> Trendy Toys</div>
                        <div><input type="checkbox" /> Peripherals</div>
                        <div><input type="checkbox" /> Handicraft</div>
                    </div>
                    <div style={{color: '#222', fontWeight: 500, marginBottom: 8}}>Price Classification</div>
                    <div style={{marginBottom: 16}}>
                        <div><input type="checkbox" /> Below 150$</div>
                        <div><input type="checkbox" /> 150$ - 750$</div>
                        <div><input type="checkbox" /> 750$ - 1250$</div>
                        <div><input type="checkbox" /> 1250$ - 2500$</div>
                        <div><input type="checkbox" /> Above 2500$</div>
                    </div>
                    <div style={{color: '#222', fontWeight: 500, marginBottom: 8}}>Area Classification</div>
                    <div style={{marginBottom: 16}}>
                        <div><input type="checkbox" /> Below 50 cm²</div>
                        <div><input type="checkbox" /> 50 - 350 cm²</div>
                        <div><input type="checkbox" /> Above 350 cm²</div>
                    </div>
                    <div style={{color: '#222', fontWeight: 500, marginBottom: 8}}>Use</div>
                    <div style={{marginBottom: 16}}>
                        <div><input type="checkbox" /> Wall Decoration</div>
                        <div><input type="checkbox" /> Desktop Ornament</div>
                        <div><input type="checkbox" /> Clothing Accessory</div>
                        <div><input type="checkbox" /> Portable Use</div>
                        <div><input type="checkbox" /> Gift and Souvenir</div>
                        <div><input type="checkbox" /> Home Use</div>
                        <div><input type="checkbox" /> Virtual Application</div>
                    </div>
                    <button style={{marginTop: 12, width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer'}}>Apply Filters</button>
                </aside>
                {/* 作品区 */}
                <main style={{flex: 1}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24}}>
                        <div style={{fontWeight: 600, fontSize: 22}}>6 Artworks</div>
                        <select style={{padding: '8px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15}}>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36}}>
                        {images.map((img, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                borderRadius: 20,
                                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <img
                                    src={img}
                                    alt="Artwork"
                                    style={{width: '100%', height: 220, objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20}}
                                />
                                <div style={{padding: '20px 24px 16px 24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between'}}>
                                    <div>
                                        <div style={{fontWeight: 600, fontSize: 18, marginBottom: 4}}>Abstract Composition</div>
                                        <div style={{color: '#888', fontSize: 14, marginBottom: 8}}>by Vincent Artist</div>
                                        <div style={{fontWeight: 700, fontSize: 18, marginBottom: 12}}>$5,500</div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <button style={{
                                            background: '#000',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 16,
                                            padding: '6px 24px',
                                            fontWeight: 600,
                                            fontSize: 15,
                                            cursor: 'pointer',
                                        }}>View</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
