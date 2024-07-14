import { useCallback } from "react";

interface ISearchBarProps {
  placeholder: string;
  searchableContent?: string[];
  onSearch: (filteredContent?: string[]) => void;
}

//The component takes an array of strings to search upon it's items
//The call back function is called when the search bar is changed and returns the filtered content to the parent component
//The parent component then sets the filtered content to a useState variable that triggers the new content to be displayed
// so... pass searchable content to search bar --> searchbarß filters and calls a function back --> that function alters a useState variable that triggers a re-render

export default function SearchBar({
  placeholder,
  searchableContent,
  onSearch,
}: ISearchBarProps) {
  const handleSearch = useCallback(
    (text: string) => {
      const filteredContent = searchableContent?.filter((x) =>
        x.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );

      onSearch(filteredContent);
    },
    [onSearch, searchableContent]
  );

  return (
    <input
      placeholder={placeholder}
      width="100%"
      className="flex py-2 px-1 w-96 text-md text-right pr-3 border-red-600 border-2 rounded-full"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
