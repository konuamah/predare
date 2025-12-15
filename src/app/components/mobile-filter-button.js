export default function MobileFilterButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden fixed bottom-6 right-6 z-50 bg-orange-500 text-white rounded-full p-4 shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Open filters"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        </button>
    );
}