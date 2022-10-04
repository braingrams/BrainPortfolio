import { Box, Grid, Heading } from "@chakra-ui/react";

import projects from "../../components/utils/projects.json";
import ProjectCard from "lib/components/bits/ProjectCard";

function Gallery() {
  return (
    <Box id="gallery" mt={["5rem", "10rem"]}>
      <Heading textAlign="center">Project Gallery</Heading>
      <Box w={["90%", "80%"]} mx="auto" mt="4rem">
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          columnGap="2rem"
          rowGap="3rem"
        >
          {projects.map((project: any) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.projectName}
                link={project.siteLink}
                image={project.imageUrl}
                contributor={project.contributors}
                theme={project.theme}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Gallery;
