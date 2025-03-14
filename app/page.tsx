import Intro from "./components/Intro";
import Myskills from "./components/MySkills";
import Myprojects from "./components/MyProjects";

export default function Home() {
  return (
    <section className="px-9 grid grid-cols-3 gap-7">
      <div className="mt-20 self-start sticky top-20">
        <Intro />
      </div>
      <div className="col-span-2 mt-20 overflow-auto">
        <Myskills />
        <Myprojects />
      </div>
    </section>
  );
}
