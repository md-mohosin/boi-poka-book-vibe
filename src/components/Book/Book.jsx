import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { image, bookName, author, tags, bookId } = book
    return (
        <Link to={`book/${bookId}`}>
            <div className="mt-4">
                <div className="p-4 border">
                    <figure className="bg-[#F3F3F3] flex justify-center p-4">
                        <img className="w-[166px]  h-[200px] "
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <div className="flex justify-center gap-2 my-4">
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs text-green-500">{tag}</button>)
                            }
                        </div>
                        <h1 className="text-xl font-bold">{bookName}</h1>
                        <p>{author}</p>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        </Link>
    );
};

export default Book;