export default function MobileFilterModal({
    isOpen,
    categories,
    selectedCategory,
    projectCounts,
    onCategoryChange,
    onClose
}) {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out max-h-[80vh] overflow-hidden">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-black">Filter by Category</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close filters"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-80px)]">
                    <div className="flex flex-col gap-3 pb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`
                                    w-full px-4 py-4 rounded-lg text-base font-medium text-left
                                    transition-all duration-300 flex items-center justify-between
                                    ${selectedCategory === category
                                        ? "bg-orange-500 text-white shadow-md"
                                        : "bg-gray-100 text-gray-700 active:bg-gray-200"
                                    }
                                `}
                            >
                                <span>{category}</span>
                                <span className={`
                                    text-xs px-3 py-1 rounded-full font-semibold
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
        </>
    );
}