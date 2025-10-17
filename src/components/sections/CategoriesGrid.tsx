import { CategoryCard } from '../CategoryCard'

interface CategoryProduct {
  id: number
  name: string
  image: string
}

const categoryProducts: CategoryProduct[] =
  [
    {
      "id": 1,
      "name": "Power Sanders",
      "image": "/assets/img/category/01.png"
    },
    {
      "id": 2,
      "name": "Kitchen Fittings",
      "image": "/assets/img/category/02.jpg"
    },
    {
      "id": 3,
      "name": "Womens Fashion",
      "image": "/assets/img/category/03.jpg"
    },
    {
      "id": 4,
      "name": "Donate to Healthcare",
      "image": "/assets/img/category/04.jpg"
    },
    {
      "id": 5,
      "name": "Goat",
      "image": "/assets/img/category/05.jpg"
    },
    {
      "id": 6,
      "name": "Watering Systems & Garden Hoses",
      "image": "/assets/img/category/06.jpg"
    },
    {
      "id": 7,
      "name": "Margarine & Spread",
      "image": "/assets/img/category/07.jpg"
    },
    {
      "id": 8,
      "name": "Bedding Sets",
      "image": "/assets/img/category/08.jpg"
    },
    {
      "id": 9,
      "name": "Pools",
      "image": "/assets/img/category/09.jpg"
    },
    {
      "id": 10,
      "name": "Bathroom Lighting",
      "image": "/assets/img/category/10.jpg"
    },
    {
      "id": 11,
      "name": "Eye Primers",
      "image": "/assets/img/category/11.jpg"
    },
    {
      "id": 12,
      "name": "Digital Downloads",
      "image": "/assets/img/category/12.jpg"
    },
    {
      "id": 13,
      "name": "Skirts",
      "image": "/assets/img/category/13.jpg"
    },
    {
      "id": 14,
      "name": "Wipes & Refills",
      "image": "/assets/img/category/14.jpg"
    },
    {
      "id": 15,
      "name": "Beans & Chickpeas",
      "image": "/assets/img/category/15.jpg"
    },
    {
      "id": 16,
      "name": "Magnet & Felt Playboards",
      "image": "/assets/img/category/16.jpg"
    }
  ]

export function CategoriesGrid() {
  return (
    <section id="Categories_section" className="py-8">
      <div className="container mx-auto">
        <div className="">
          <div className="font-bold text-[#424242] text-[22px] mb-2">
            <span>Categories</span>
          </div>
          <div className="my-2 rounded p-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {categoryProducts.map((product, index) => {
                const totalCols = 8;
                const isFirstRow = index < totalCols;
                const isFirstCol = index % totalCols === 0;

                return (
                  <CategoryCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    isFirstRow={isFirstRow}
                    isFirstCol={isFirstCol}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}