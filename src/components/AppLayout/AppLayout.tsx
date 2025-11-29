import { useState } from "react";
import { Header } from "../Header";
import { BodyBoard } from "../BodyBoard";
import { Footer } from "../Footer";
import { resetBoardState } from "../../state/boardStorage";

function AppLayout() {
  const [resetId, setResetId] = useState(0);

  const handleResetBoard = () => {
    resetBoardState();
    setResetId((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header onResetBoard={handleResetBoard} />
      <BodyBoard key={resetId} />
      <Footer />
    </div>
  );
}

export default AppLayout;
