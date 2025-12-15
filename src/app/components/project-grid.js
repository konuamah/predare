import ProjectCard from "./project-card";
import FilterSidebar from "./filter-sidebar";

export default function ProjectGrid({
    projects,
    categories,
    selectedCategory,
    projectCounts,
    onCategoryChange,
    isAnimating
}) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Projects Grid - Left Side */}
                    <div className={`flex-1 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Empty State */}
                        {projects.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-6xl mb-4">📁</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                                <p className="text-gray-600">Try selecting a different category</p>
                            </div>
                        )}
                    </div>

                    {/* Filter Sidebar - Right Side (Sticky) - Desktop Only */}
                    <FilterSidebar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        projectCounts={projectCounts}
                        onCategoryChange={onCategoryChange}
                    />
                </div>
            </div>
        </section>
    );
}