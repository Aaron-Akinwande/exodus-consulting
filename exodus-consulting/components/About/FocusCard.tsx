/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function FocusCard({ icon, title, description }: any) {
  return (
    <div className="group bg-slate-300 border border-slate-900/8 p-10 relative overflow-hidden transition-all duration-400 hover:bg-white hover:border-orange-600 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/8">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-600 to-teal-500 transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

      <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-600 to-teal-500 flex items-center justify-center mb-6 font-serif font-bold text-2xl text-white">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-light text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-sm text-slate-900 opacity-70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
