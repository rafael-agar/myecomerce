import React from 'react'

function Promos({ promoList }) {
  return (
    <div className="container mx-auto py-2 lg:px-10 lg:pt-10">
      <div className="hidden md:block">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              {promoList.length > 0 && (
                <img
                  alt={promoList[0].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[0].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              {promoList.length > 1 && (
                <img
                  alt={promoList[1].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[1].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
            <div className="w-full p-1 md:p-2">
              {promoList.length > 2 && (
                <img
                  alt={promoList[2].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[2].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              {promoList.length > 3 && (
                <img
                  alt={promoList[3].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[3].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              {promoList.length > 4 && (
                <img
                  alt={promoList[4].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[4].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              {promoList.length > 5 && (
                <img
                  alt={promoList[5].attributes.name}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={`http://localhost:1337${promoList[5].attributes.image.data[0].attributes.url}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {promoList.map((promo, index) => (
          <div key={index} className="flex flex-wrap">
            <div className="w-full p-1">
              <img
                alt={promo.attributes.name}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`http://localhost:1337${promo.attributes.image.data[0].attributes.url}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Promos
