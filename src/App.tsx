import React, { useState } from "react";
import NameInput from "./components/NameInput";
import UploadPhotos from "./components/UploadPhotos";
import WaitingScreen from "./components/WaitingScreen";
import RankingBoard from "./components/RankingBoard";
import ResultsPage from "./components/ResultsPage";

function App() {
  const [step, setStep] = useState("name");
  const [playerName, setPlayerName] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {step === "name" && <NameInput onNext={(name) => { setPlayerName(name); setStep("upload"); }} />}
      {step === "upload" && <UploadPhotos playerName={playerName} onUploaded={() => setStep("waiting-upload")} />}
      {step === "waiting-upload" && <WaitingScreen type="upload" playerName={playerName} onContinue={() => setStep("ranking")} />}
      {step === "ranking" && <RankingBoard playerName={playerName} onSubmitted={() => setStep("waiting-votes")} />}
      {step === "waiting-votes" && <WaitingScreen type="votes" playerName={playerName} onContinue={() => setStep("results")} />}
      {step === "results" && <ResultsPage />}
    </div>
  );
}

export default App;