import { categories } from "./Category"

export default function Categories() {
  return (
    <div className="mx-9 mb-9">
      <select
        id="categories"
        className="relative p-4 rounded-lg block w-full text-sm text-gray-900 bg-gray-50 shadow-md focus:shadow-xl focus:border-black"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.value}
          </option>
        ))}
      </select>
    </div>
  )
}
