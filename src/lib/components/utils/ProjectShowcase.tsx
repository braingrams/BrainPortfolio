import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  // @ts-ignore
} from "@ap.cx/react-fullpage";

function ProjectShowcase() {
  const SectionStyle = {
    height: "100vh",
    display: "flex",
  };
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>1</FullpageSection>
        <FullpageSection style={SectionStyle}>2</FullpageSection>
        <FullpageSection style={SectionStyle}>3</FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default ProjectShowcase;
