import { useCallback } from "react";

interface ISearchBarProps<T> {
  placeholder: string
  searchableContent?: T[]
  properties: (keyof T)[] // Changed from single `property` to array of properties
  onSearch: (filteredContent?: T[]) => void
}

//The component takes an array of Genric to search upon it's items by a certain property
//The call back function is called when the search bar is changed and returns the filtered content to the parent component
//The parent component then sets the filtered content to a useState variable that triggers the new content to be displayed
// so... pass searchable content to search bar --> searchbarß filters and calls a function back --> that function alters a useState variable that triggers a re-render

export default function SearchBar<T>({
  placeholder,
  searchableContent,
  properties,
  onSearch,
}: ISearchBarProps<T>) {
  const handleSearch = useCallback(
    (text: string) => {
      const filteredContent = searchableContent?.filter((item) =>
        properties.some((property) =>
          item[property]?.toString().toLowerCase().includes(text.toLowerCase())
        )
      )

      onSearch(filteredContent)
    },
    [onSearch, searchableContent, properties]
  )

  return (
    <input
      placeholder={placeholder}
      className='w-full px-3 py-2 border rounded-md'
      onChange={(e) => handleSearch(e.target.value)}
    />
  )
}