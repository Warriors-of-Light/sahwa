import { Icon } from "./icon";

interface ICardProps {
  array: Array<{ name: string; type: string; link: string }>;
}
export default function CardGrid({ array: teams }: ICardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {teams.map((team, index) => (
        <div
          key={index}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <Icon
              type={team.type}
              size={20}
              style=" stroke-current text-black"
            />
          </div>
          <div className="min-w-0 flex-1">
            <a href={team.link} className="focus:outline-none" target="_blank">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-xl font-medium text-gray-900">{team.name}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
