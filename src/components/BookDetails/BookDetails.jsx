import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams()

    const data = useLoaderData()

    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id)

    const { image, bookName, author, review } = book

    return (
        <div>
            <div className="flex gap-8">
                <figure className="bg-[#F3F3F3] w-2/3 flex justify-center">
                    <img className="w-[400px] h-[500px] p-8"
                        src={image}
                        alt="Album" />
                </figure>
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold">{bookName}</h2>
                    <p>{author}</p>
                    <div className="divider"></div>
                    <p>Review : {review}</p>
                    <div className=" flex gap-3">
                        <button className="btn btn-outline">Read</button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;