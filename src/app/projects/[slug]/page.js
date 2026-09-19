import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects } from "@/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found — Abdullah" };
  }

  return {
    title: `${project.title} — Abdullah`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="bg-black">
        <ProjectDetail
          project={project}
          prev={prev}
          next={next}
          position={index + 1}
          total={projects.length}
        />
      </main>
      <Footer />
    </>
  );
}
