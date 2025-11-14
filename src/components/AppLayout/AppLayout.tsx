import { Header } from "../Header";
import { BodyBoard } from "../BodyBoard";
import { Footer } from "../Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-[90rem] w-full px-8">
      <Header />
      <BodyBoard />
      <Footer />
    </div>
  );
}

export default AppLayout;
