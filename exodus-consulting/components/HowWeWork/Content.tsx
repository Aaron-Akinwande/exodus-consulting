import Align from "./Align";
import Diagnostic from "./Diagnostic";
import Hero from "./Hero";
import Philosophy from "./Philosophy";

export default function Content() {
  return (
    <div className="min-h-screen ">
      <Hero />

      <Align />

      <Philosophy />

      <Diagnostic />
    </div>
  );
}
