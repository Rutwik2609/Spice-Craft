import React from 'react'
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {

  const fav=false;

  return (
    <div className='flex-1 p-8 min-h-screen '>
      <div className='max-w-screen-lg mx-auto'  >
        <p className='text-3xl font-bold md:text-5xl my-4'>Favourites</p>

        {!fav && (
          <div className='h-[80vh] flex flex-col justify-center items-center gap-4' >
            <img src="/404.svg" alt="PNF" className='h-3/4 object-contain ' />
            <h1 className='font-bold tracking-tighter'>No Favourite Recipes</h1>
          </div>
        )}


        {fav &&(
          <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>

          </div>
        )}
      </div>
      
    </div>
  )
}

export default FavoritesPage