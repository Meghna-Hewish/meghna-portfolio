import { lazy, Suspense } from "react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <LoadingProvider>
      <Suspense fallback={null}>
        <MainContainer>
          <CharacterModel />
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;