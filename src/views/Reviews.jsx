import ReviewsCard from "../components/ReviewsCard.jsx"

const REVIEWS_DATA = [
    {
        name:"Maya Patel",
        review:"Absolutely loved the vibe here ",
        rating:5,
        avtar:"https://avatar.oxro.io/avatar.svg?name=Maya+Patel&background=ffb6c1&color=000000"
    },
    {name:"Arjun Mehta",
        review:"Great place to chill with friends. ",
        rating:4,
        avtar:"https://avatar.oxro.io/avatar.svg?name=Arjun+Mehta&background=f4c2c2&color=000000"
    },
     {name:"sara khan",
        review:"One of the coziest cafés I’ve visited.",
        rating:5,
        avtar:"https://avatar.oxro.io/avatar.svg?name=Sara+Khan&background=fadadd&color=000000"
    },
     {name:"Rohan Verma",
        review:"The ambience is lovely.",
        rating:4.5,
        avtar:" https://avatar.oxro.io/avatar.svg?name=Rohan+Verma&background=ffc0cb&color=000000"
    },
     {name:"Harshita Jethani",
        review:"Fantastic spot for brunch. ",
        rating:4.7,
         avtar:"https://avatar.oxro.io/avatar.svg?name=Harshita+Jethani&background=ffe4e1&color=000000"
    },
     {name:"Priya Sharma",
        review:"Good service and quality. ",
        rating:5,
         avtar:"https://avatar.oxro.io/avatar.svg?name=Priya+Sharma&background=fbcce7&color=000000"
    },
     {name:"Himani Kubade",
        review:"This place gives 10/10 in comfort.",
        rating:4.1,
         avtar:"https://avatar.oxro.io/avatar.svg?name=Himani+Kubade&background=fbcce7&color=000000"
    },
     {name:"Samad Ansari",
        review:" Food was fine.",
        rating:3.5,
         avtar:"https://avatar.oxro.io/avatar.svg?name=Samad+Ansari&background=fbcce7&color=000000"
    },
     {name:"Niharika panjwani",
        review:"Love the aesthetic here .",
        rating:4.9,
         avtar:"https://avatar.oxro.io/avatar.svg?name=Niharika+Panjwani&background=fbcce7&color=000000"
    },
    
]

function Reviews() {
  return (
    <div className="mt-16">
        <h2 className="text-center text-4xl text-[#CD2C58] mb-10">What our customers says</h2>
    <div className="flex flex-wrap justify-center ">
       {REVIEWS_DATA.map((reviewObj)=>{
        const {name,review,rating,avtar} = reviewObj;
        return (
            <ReviewsCard 
            key={name}
            name={name}
            review={review}
            rating={rating} 
            avtar={avtar}/>
        );
       })}
    </div>
    </div>
  )
}

export default Reviews