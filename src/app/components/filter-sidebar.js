export default function FilterSidebar({ categories, selectedCategory, projectCounts, onCategoryChange }) {
    return (
        <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-[140px] z-40">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-black mb-4">Filter by Category</h3>
                    <div className="flex flex-col gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`
                                    w-full px-4 py-3 rounded-lg text-sm font-medium text-left
                                    transition-all duration-300 flex items-center justify-between
                                    ${selectedCategory === category
                                        ? "bg-orange-500 text-white shadow-md"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }
                                `}
                            >
                                <span>{category}</span>
                                <span className={`
                                    text-xs px-2 py-1 rounded-full font-semibold
                                    ${selectedCategory === category
                                        ? "bg-white/20 text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }
                                `}>
                                    {projectCounts[category]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}