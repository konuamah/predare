import Image from "next/image";

export default function ProjectCard({ project, index }) {
    return (
        <div
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                        {project.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>

                {/* Results */}
                <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm text-gray-700 font-medium line-clamp-2">
                            {project.results}
                        </p>
                    </div>
                </div>

                {/* Client */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                        Client: <span className="font-semibold text-gray-700">{project.client}</span>
                    </p>
                </div>

                {/* Visit Site Button */}
                {project.link && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Site
                        </a>
                    </div>
                )}

            </div>
        </div>
    );
}