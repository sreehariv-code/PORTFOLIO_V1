import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="project-card min-w-[300px] rounded-xl max-w-[450px] p-3 aspect-video border-[#333] border">
      <div className="img-section bg-red-500 w-full aspect-video rounded-lg"></div>
      <div className="project-content mt-5 flex justify-between">
        <div className="description">
          <h3>Project Name</h3>
          <p>Description</p>
        </div>
        <div className="buttons flex gap-7">
          <a className="h-max text-3xl" href="">
            <FiGithub />
          </a>
          <a className="h-max text-3xl" href="">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
