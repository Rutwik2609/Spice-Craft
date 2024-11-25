import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const getTwoValuesFromArray = (arr) => {
	return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
	
	return (
		<div className={`flex flex-col rounded-md bg-slate-400 overflow-hidden p-3 relative`}>
			<a
				href="#"
				target='_blank'
				className='relative h-32'
			>
				<div className='skeleton absolute inset-0' />
				<img
					src="/logo.svg"
					alt='recipe img'
					className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
				/>
				<div
					className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center
							 gap-1 text-sm
							'
				>
					<Soup size={16} /> 4 Servings
				</div>

				<div
					className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
					
				>
					
				</div>
			</a>

			<div className='flex mt-1'>
				<p className='font-bold tracking-wide'>Butter Chicken</p>
			</div>
			<p className='my-2'>
				Kitchen
			</p>

			<div className='flex gap-2 mt-auto'>
				{/* {healthLabels.map((label, idx) => (
					<div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
						<HeartPulse size={16} />
						<span className='text-sm tracking-tighter font-semibold'>{label}</span>
					</div>
				))} */}
			</div>
		</div>
	);
};
export default RecipeCard;