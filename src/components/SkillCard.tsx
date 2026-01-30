import { Skill } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-black/80 backdrop-blur-sm border-2 border-red-400/60 rounded-2xl shadow-lg p-6 w-56 flex flex-col items-center">
      <span className="text-red-400 font-bold text-lg font-[Cinzel] mb-1">{skill.name}</span>
      <span className="text-white/80 text-sm mt-2 text-center">{skill.description}</span>
    </div>
  );
}
