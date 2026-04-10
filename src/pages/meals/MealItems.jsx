import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";

import { Button } from "../../components/ui/button.jsx";

export default function MealItems() {
  const { category } = useParams();
  const nav = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php",
        {
          params: { c: category },
        }
      );
      setData(response.data.meals);
    } catch (err) {
      setError(err?.message || "Failed to fetch meals");
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  // 🔄 Loading Skeleton
  if (loading)
    return (
      <div className="p-6 max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-60 bg-gray-200 animate-pulse rounded-2xl"
          />
        ))}
      </div>
    );

  // ❌ Error UI
  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-red-500 font-semibold">{error}</p>
        <Button onClick={getData}>Retry</Button>
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold capitalize">
          🍽️ {category} Meals
        </h1>

        <Button variant="outline" onClick={() => nav(-1)}>
          ← Back
        </Button>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center text-gray-500">
          No meals found for this category
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((meal) => (
          <Card
            key={meal.idMeal}
            onClick={() => nav(`/meal/${meal.idMeal}`)}
            className="cursor-pointer overflow-hidden rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-44 overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-base font-semibold line-clamp-2">
                {meal.strMeal}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-xs text-muted-foreground">
                Meal ID: {meal.idMeal}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}