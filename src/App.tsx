import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import NavContent from "./componets/NavContent";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " "aside main "`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
          <NavContent />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bgColor={"yellow"}>
            ASIDE
          </GridItem>
        </Show>

        <GridItem area={"main"} bgColor={"green"}>
          main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
