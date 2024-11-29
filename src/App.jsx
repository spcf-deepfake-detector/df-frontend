import { Outlet } from "react-router";
import { AppShell } from "@mantine/core";
import classes from "./App.module.css";
import '@mantine/dropzone/styles.css';

// Components
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";

function App() {
  return (
    <AppShell header={{ height: 70, offset: false }}>
      <AppShell.Header className={classes.Header}>
        <Container>
          <Header />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
