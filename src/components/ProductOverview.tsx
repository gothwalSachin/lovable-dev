import ProductCard from "./ProductCard";

const ProductOverview = () => {
    return (
        <div className="w-full px-4">
            <div className="flex flex-col gap-6 p-8 border border-[#272725] rounded-xl  bg-[#1c1c1c]">
                <div className="flex w-full items-center justify-between">
                    <p className="text-2xl font-bold">From the Community</p>
                    <a className="duration-125 ml-auto text-sm transition-opacity ease-in-out hover:opacity-80" href="#">View All</a>
                </div>

                <div className="grid grid-cols-4 gap-x-5 gap-y-8">
                    {card?.map(item =>
                        <ProductCard key={item.id} username={item.userName} remixes={item.remixes} />
                    )}
                </div>

                <div className="mt-0 flex justify-center">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none bg-[#1c1c1c] text-sm font-bold hover:bg-[#FCFBF8]/20 border border-[#272725] h-8 rounded-md px-4 py-2 mt-8">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;

const card = [{ id: 1, userName: 'shanks', remixes: 300 }, { id: 2, userName: 'luffy', remixes: 400 }, { id: 3, userName: 'zoro', remixes: 103 }, { id: 4, userName: 'sanji', remixes: 302 }, { id: 5, userName: 'nami', remixes: 234 }, { id: 6, userName: 'whitebeard', remixes: 500 }, { id: 7, userName: 'goldroger', remixes: 900 }, { id: 8, userName: 'bigmummy', remixes: 500 }, { id: 9, userName: 'nicorobin', remixes: 30 }, { id: 10, userName: 'jimbie', remixes: 100 }, { id: 11, userName: 'brook', remixes: 10 }, { id: 12, userName: 'boahancock', remixes: 30 }]
