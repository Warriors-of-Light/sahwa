import { Icon } from "./icon";

interface ICardProps {
  item: { name: string; type: string; link: string };
}
export default function CardGrid({ item }: ICardProps) {
  return (
    <div className="relative flex  mt-5  w-96 text-center justify-center  items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <div className="flex-shrink-0">
        <Icon type={item.type} size={20} style=" stroke-current text-black" />
      </div>
      <div className="min-w-0 flex-1">
        <a href={item.link} className="focus:outline-none" target="_blank">
          <span className="absolute inset-0 text-center" aria-hidden="true" />
          <p className="text-xl font-medium text-gray-900">{item.name}</p>
        </a>
      </div>
    </div>
  );
}
