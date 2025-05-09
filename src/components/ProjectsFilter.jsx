const categories = ["Todos", "WordPress", "Em Código"];

const ProjectsFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full transition ${
            selectedCategory === category
              ? "bg-green-500 text-light"
              : "bg-gray-200 text-gray-700 hover:bg-green-500 hover:text-light cursor-pointer"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
