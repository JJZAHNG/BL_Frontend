// src/components/Footer.tsx
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="layoutcontainer">
                <p>© {new Date().getFullYear()} BlendLumina. All rights reserved.</p>
                <p>Crafted with passion for art & technology.</p>
            </div>
        </footer>
    )
}
