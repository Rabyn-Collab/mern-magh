import axios from "axios"
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card.jsx";
import { useNavigate } from "react-router";


export default function Home() {

  const [data, setData] = useState();
  const [loading, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data.categories);
    } catch (err) {
      setLoad(false);
      setError(err);

    }
  }


  useEffect(() => {
    getData();

  }, []);



  if (loading) return <div>Loading...</div>
  if (error) return <div dangerouslySetInnerHTML={{ __html: error.response.data }}></div>




  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Food Categories</h1>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.map((category) => (
          <Card
            onClick={() => nav(`/meal-items/${category.strCategory}`)}

            key={category.idCategory}
            className="overflow-hidden hover:shadow-xl transition duration-300 rounded-2xl cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}

                className="object-cover"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-lg">
                {category.strCategory}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {category.strCategoryDescription}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}