

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }


    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-5">Add a Coffee</h3>
            <form onSubmit={handleAddCoffee}>
                <div className="w-full p-2 md:w-2/4 mx-auto space-y-3">
                    <div className='md:flex gap-3'>
                        <div className="">
                            <label className="text-lg">Coffee Name</label>
                            <input type="text" name="name" placeholder="Coffee Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="">
                            <label className="text-lg">Available Quantity</label>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                    </div>
                    <div className='md:flex gap-3'>
                        <div className="">
                            <label className="text-lg">Supplier Name</label>
                            <input type="text" name="supplier" placeholder="Supplier Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="">
                            <label className="text-lg">Taste</label>
                            <input type="text" name="taste" placeholder="Taste" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                    </div>
                    <div className='md:flex gap-3'>
                        <div className="">
                            <label className="text-lg">Category</label>
                            <input type="text" name="category" placeholder="Category" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="">
                            <label className="text-lg">Details</label>
                            <input type="text" name="details" placeholder="Details" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="">
                            <label className="text-lg">Photo URL</label>
                            <input type="text" name="photo" placeholder="Photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;