import { Outlet } from "react-router";
import { AppShell } from "@mantine/core";
import classes from "./App.module.css";

// Components
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";

function App() {
  return (
    <AppShell className={classes.AppShell} padding="md" header={{ height: 70 }}>
      <AppShell.Header className={classes.Header}>
        <Container>
          <Header />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
