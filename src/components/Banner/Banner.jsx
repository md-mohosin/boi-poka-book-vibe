import bannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="hero bg-[#F3F3F3] ">
                <div className="hero-content flex-col lg:flex-row-reverse w-11/12 py-8">
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-success mt-8">View the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;