import { Header } from "../Header";
import { BodyBoard } from "../BodyBoard";
import { Footer } from "../Footer";

function AppLayout() {
  return (
    <div className="flex flex-col border border-black">
      <Header />
      <BodyBoard />
      <Footer />
    </div>
  );
}

export default AppLayout;
