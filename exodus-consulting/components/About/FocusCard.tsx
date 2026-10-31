type FocusCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FocusCard({ icon, title, description }: FocusCardProps) {
  return (
    <div className="group bg-white border border-[#e3e8ef] p-8 transition-all duration-300 hover:border-[#D25A14] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(10,33,69,0.1)]">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-5 font-semibold text-xl text-white"
        style={{ background: "linear-gradient(135deg, #D25A14, #4A9EA6)" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-normal mb-2" style={{ color: "#0A2145" }}>
        {title}
      </h3>
      <p className="text-sm" style={{ color: "#5a6b85" }}>
        {description}
      </p>
    </div>
  );
}
