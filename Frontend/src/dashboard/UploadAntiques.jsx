import React, { useState } from "react";

const UploadAntiques = () => {
     const antiqueCategories = ["Original Arts", "Jewelery", "Books", "Home Decor", "Vintage Cars", "Furniture", "Musical"];

     const [selectedAntiqueCategory, setSelectedAntiqueCategory] = useState(antiqueCategories[0]);
     const handleChangeSelectedValue = (event) => {
          setSelectedAntiqueCategory(event.target.value);
     };

    //  handle antique submission
    const handleAntiqueSubmission = (event)=> {
        event.preventDefault();
        const form = event.target;
     
        const title = form.title.value
        const price = form.price.value
        const image = form.image.value;
        const categories = form.categories.value
        const description = form.description.value

        const bookObj = {
            title, price, image, categories, description
        }
        console.log(bookObj)
    }

     return (
          <div className="mt-10">
               <h2 className="text-3xl font-bold  mb-5">Upload an Antique</h2>
               <form className="flex lg:w-[1100px] flex-col flex-wrap gap-4" onSubmit={handleAntiqueSubmission}>
                    {/* first category */}
                    <div className="flex gap-8">
                         {/*Title Here  */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="title"
                                        required
                                        name="title"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Title"
                                   />
                                   <label
                                        htmlFor="title"
                                        value="Antique title"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Type title here
                                   </label>
                              </div>
                         </div>

                         {/* Price */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="price"
                                        required
                                        name="price"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="price "
                                   />
                                   <label
                                        htmlFor="price"
                                        value="price"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        price
                                   </label>
                              </div>
                         </div>
                    </div>
                    {/* second category */}
                    <div className="flex gap-8">
                         {/*Image  */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="image"
                                        required
                                        name="image"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Image here"
                                   />
                                   <label
                                        htmlFor="image"
                                        value="Antique Image"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Image url
                                   </label>
                              </div>
                         </div>

                         {/* category*/}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <label htmlFor="Inputstate" value="price" price />
                                   <select
                                        id="Inputstate"
                                        name="categories"
                                        className="w-full rounded"
                                        value={selectedAntiqueCategory}
                                        onChange={handleChangeSelectedValue}
                                   >
                                        {antiqueCategories.map((option) => (
                                             <option key={option} value={option}>
                                                  {option}
                                             </option>
                                        ))}
                                   </select>
                              </div>
                         </div>
                    </div>

                    {/* third category */}
                    {/* job description */}
                    <div className="lg:w-full">
                         <div className="relative">
                           

                          
                              <textarea
                                   id="description"
                                   required
                                   name="description"
                                   rows="8"
                                   className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Write your description here..."
                              ></textarea>

                              <label
                                   htmlFor="description"
                                   value="Description"
                                   className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                              >
                                   
                              </label>
                         </div>
                    </div>
                    <button type="submit" className="mt-4 bg-blue-600 py-2 text-white">
                        Upload
                    </button>
               </form>
          </div>
     );
};

export default UploadAntiques;
