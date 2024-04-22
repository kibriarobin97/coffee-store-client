import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, photo } = coffee;


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }

    return (
        <div className="card-side bg-base-100 shadow-xl">
            <figure className="w-full h-[300px] rounded-md"><img src={photo} alt={name} className="w-full bg-center object-cover" /></figure>
            <div className="flex justify-between items-center">
                <div className="card-body">
                    <h2 className="card-title">Coffee Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Taste: {taste}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <div className="join join-vertical space-y-2">
                        <button className="btn btn-sm">View</button>
                        <button className="btn btn-sm">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;