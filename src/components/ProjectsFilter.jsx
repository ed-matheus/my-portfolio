const categories = ["Todos", "WordPress", "Em Código"];

const ProjectsFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-10 xl:gap-12 mb-10">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-[7rem] md:w-[8rem] px-4 py-2 rounded-full transition ${
            selectedCategory === category
              ? "bg-cyan text-light"
              : "bg-gray-200 text-dark hover:bg-cyan hover:text-light cursor-pointer"
          }`}
        >
          <span className="text-sm md:text-[1rem]">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
