import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      {(setIsOpen) => (
  <Dashboard setIsOpen={setIsOpen} />
)}
    </MainLayout>
  );
}

export default App;