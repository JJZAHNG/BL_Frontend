// src/pages/Artworks.tsx
import {useEffect, useState} from "react";
import axios from "../api/axios";
import ArtworkCard from "../components/ArtworkCard";
import FilterBar from "../components/FilterBar";

type Artwork = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    artist_name?: string;
};

type Category = {
    id: number;
    name: string;
};

export default function Artworks() {
    // 数据状态
    const [categories, setCategories] = useState<Category[]>([]);
    const [artworks, setArtworks] = useState<Artwork[]>([]);

    // 筛选器状态
    const [filters, setFilters] = useState<{ categoryId?: number; priceRange?: [number, number] }>({});

    // 加载状态
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingArtworks, setLoadingArtworks] = useState(true);

    // —— 1️⃣ 组件挂载时只加载分类 ——
    useEffect(() => {
        const fetchCategories = async () => {
            setLoadingCategories(true);
            try {
                const res = await axios.get("/products/categories/");
                setCategories(res.data);
            } catch (err) {
                console.error("加载分类失败:", err);
            } finally {
                setLoadingCategories(false);
            }
        };
        fetchCategories();
    }, []); // 依赖列表空，保证只在 mount 时跑一次

    // —— 2️⃣ filters 变化时加载作品 ——
    useEffect(() => {
        const fetchArtworks = async () => {
            setLoadingArtworks(true);
            try {
                const params: any = {};
                if (filters.categoryId) params.category_id = filters.categoryId;
                if (filters.priceRange) {
                    params.price_min = filters.priceRange[0];
                    params.price_max = filters.priceRange[1];
                }
                const res = await axios.get("/products/artworks/", {params});
                setArtworks(res.data);
            } catch (err) {
                console.error("加载作品失败:", err);
            } finally {
                setLoadingArtworks(false);
            }
        };
        fetchArtworks();
    }, [filters]); // 只要 filters 变（包括初始化的 {}），就重新请求

    return (
        <div className="layoutcontainer container-padding">
            <h2>Featured Artworks</h2>

            {/* —— 分类区 —— */}
            {loadingCategories ? (
                <div className="loading-categories">Loading categories…</div>
            ) : (
                <FilterBar categories={categories} onFilterChange={setFilters}/>
            )}

            {/* —— 作品区 —— */}
            {loadingArtworks ? (
                <div className="loading-artworks">Loading artworks…</div>
            ) : (
                <div className="artwork-grid">
                    {artworks.map((art) => (
                        <ArtworkCard key={art.id} artwork={art}/>
                    ))}
                </div>
            )}
        </div>
    );
}
