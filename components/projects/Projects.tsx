import Btn from "../Btn";
import Container from "../Container";
import Project from "./Project";
import projects from "@/settings/data/projects";
import { v4 } from "uuid";

const Projects = () => {
  return (
    <section className="projects bg-WHITE rounded-[80px]">
      <Container className="py-20 flex flex-col gap-20">
        <h2 className="text-BLACK font-bold text-[48px]">{projects.title}</h2>
        <div className="projects flex flex-col gap-10">
          {projects.items.map((item) => (
            <Project
              description={item.description}
              image={item.image}
              link={item.link}
              name={item.name}
              tags={item.tags}
              title={item.title}
              key={v4()}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Btn name="View all projects" link="/projects" />
        </div>
      </Container>
    </section>
  );
};
export default Projects;
