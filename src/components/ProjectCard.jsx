const ProjectCard = () => {
  return (
    <div className="project-card min-w-[300px] rounded-xl max-w-[450px] p-3 aspect-video border-[#333] border">
      <div className="img-section bg-red-500 w-full aspect-video rounded-lg"></div>
      <div className="project-content mt-5 flex justify-between">
        <div className="description">
          <h3>Project Name</h3>
          <p>Description</p>
        </div>
        <div className="buttons">
          <a className="border-2 border-black px-5 py-2 rounded-md" href="">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
