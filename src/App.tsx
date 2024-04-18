import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./componets/pages/Home";
import DrinkingWater from "./componets/pages/DrinkingWater";
import Excersises from "./componets/pages/Excersises";
import Phone from "./componets/pages/Phone";
import Tasks from "./componets/pages/Tasks";
import Food from "./componets/pages/Food";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " "aside main "`,
        }}
      >
        <GridItem area={"nav"} bgColor={"blue"}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/drinking" element={<DrinkingWater />} />
            <Route path="/excersises" element={<Excersises />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/food" element={<Food />} />
          </Routes>
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
    </div>
  );
};

export default App;
