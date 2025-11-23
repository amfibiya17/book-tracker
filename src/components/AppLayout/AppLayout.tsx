import { Header } from "../Header";
import { BodyBoard } from "../BodyBoard";
import { Footer } from "../Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      <BodyBoard />
      <Footer />
    </div>
  );
}

export default AppLayout;
