// src/components/FilterBar.tsx
import {useState} from "react";

type Category = {
    id: number;
    name: string;
};

type Props = {
    categories: Category[];
    onFilterChange: (filters: { categoryId?: number; priceRange?: [number, number] }) => void;
};

const MAX_VISIBLE = 6;

const priceRanges: { label: string; value: [number, number] }[] = [
    {label: "Under $100", value: [0, 100]},
    {label: "$100 - $300", value: [100, 300]},
    {label: "$300 - $500", value: [300, 500]},
    {label: "$500 - $1000", value: [500, 1000]},
    {label: "$1000+", value: [1000, 999999]},
];

export default function FilterBar({categories, onFilterChange}: Props) {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>();
    const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>();
    const [showAllCategories, setShowAllCategories] = useState(false);

    const handleCategoryClick = (id: number) => {
        const newId = selectedCategoryId === id ? undefined : id;
        setSelectedCategoryId(newId);
        onFilterChange({categoryId: newId, priceRange: selectedPriceRange});
    };

    const handlePriceClick = (range: [number, number]) => {
        const isSame =
            selectedPriceRange?.[0] === range[0] && selectedPriceRange?.[1] === range[1];
        const newRange = isSame ? undefined : range;
        setSelectedPriceRange(newRange);
        onFilterChange({categoryId: selectedCategoryId, priceRange: newRange});
    };

    return (
        <div className="filter-bar">
            <div className="filter-group">
                <span className="filter-label">Category:</span>
                {(showAllCategories ? categories : categories.slice(0, MAX_VISIBLE)).map((cat) => (
                    <button
                        key={cat.id}
                        className={`filter-option ${selectedCategoryId === cat.id ? "selected" : ""}`}
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
                {categories.length > MAX_VISIBLE && (
                    <button
                        className="filter-option toggle-more-button"
                        onClick={() => setShowAllCategories(!showAllCategories)}
                    >
                        {showAllCategories ? "Less" : "More"}
                    </button>
                )}
            </div>

            <div className="filter-group">
                <span className="filter-label">Price:</span>
                {priceRanges.map(({label, value}) => (
                    <button
                        key={label}
                        className={`filter-option ${
                            selectedPriceRange?.[0] === value[0] && selectedPriceRange?.[1] === value[1]
                                ? "selected"
                                : ""
                        }`}
                        onClick={() => handlePriceClick(value)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}
