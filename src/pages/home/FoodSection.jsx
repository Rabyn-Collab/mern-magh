import { foodData } from "../../data/data.js";

export default function FoodSection() {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5">

      {foodData.map((item) => {

        return (
          <div key={item.id} className="text-center space-y-5">
            <img src={item.image} className="w-full" alt="" />
            <h1 className="font-medium">{item.title}</h1>
            <p>{item.description}</p>

          </div>
        )
      })
      }



    </div>
  )
}