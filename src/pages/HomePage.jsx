
import React from "react";
import RecipeCard from "../components/RecipeCard.jsx"
import { Search } from "lucide-react";


const HomePage = () => {
  const handleSearchRecipe = () => {};

  return (
    <div className="flex-1 p-10 ">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input bg-white shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>

        <div className="grid p-1 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
