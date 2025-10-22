import star from "../assets/img1.png"

function ReviewsCard({name,review,rating,avtar}) {
  return (
    <div className="bg-[#E06B80]  m-4 px-6 py-2 rounded-md flex ">
        <img src={avtar} className="rounded-full w-20 h-20 mr-6" />
        <div>
         <h3 className="text-lg font-semibold">{name}</h3>
         <div className="flex ">
           <img src={star} className="h-5 mr-2"/>
           <h2>{rating}</h2>
         </div>
        
         
      <p>{review}</p>
             

         
         
         </div>

    </div>
  );
}

export default ReviewsCard