
import './App.css';

function App() {
  return (
   <>

<header>
  
  <nav className="shadow">

  <div className="flex justify-between items-center py-6 px-10 container mx-auto">

    <div>
      <h1 className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Adsla</h1>
    </div>

    <div>
      
      <div className="hover:cursor-pointer sm:hidden">
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
        <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
      </div>
      <div className="flex items-center">

        <ul className="sm:flex space-x-4 hidden items-center">
          <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Services</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Products</a></li>
          <li><a href="#" className="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
        </ul>

        <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
          <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
          <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
        </div>
      </div>
    </div>
  </div>
  </nav>
</header>
<main>

  <section>
    <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-1 px-4 py-2   space-y-6 sm:space-y-0 sm:gap-4">

    <div className="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
      <div className="ml-20 w-80">
      <h2 className="text-white text-4xl">Adsla</h2>
      <p className="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolore?</p>

      <a href="#" className="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</a>
      </div>

    </div>
    <div className="h-96 col-span-1 ">
      <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
   <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"/>
  <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></span>
      </div>
      <div className="bg-white  rounded-md">

      <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Service</h1>
      <div className="bg-white rounded-md list-none  text-center ">
        <li className="py-3 border-b-2"><a href="#" className="list-none  hover:text-indigo-600">Products</a></li>
        <li className="py-3 border-b-2"><a href="#" className="list-none  hover:text-indigo-600">Models</a></li>
        <li className="py-3 border-b-2"><a href="#" className="list-none  hover:text-indigo-600">Pricing</a></li>
        <li className="py-3 border-b-2"><a href="#" className="list-none  hover:text-indigo-600">Hire</a></li>
        <li className="py-3 "><a href="#" className="list-none border-b-2 hover:text-indigo-600">Business</a></li>
      </div>
      </div>
    </div>
    </div>
    <input/>
<div className='text-center my-3 relative mx-5'>
<div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div className="bg-white rounded shadow p-4 m-4 w-full lg:w-1/2 max-w-lg">
        <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"/>
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal text-white-700 bg-teal-600">Add</button>
            </div>
        </div>
        <div>
            <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white-500 text-green border-green bg-green-500">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red text-white-700 bg-red-500">Remove</button>
            </div>
          	<div className="flex mb-4 items-center">
                <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white-500  border-gray bg-gray-500">Not Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red text-white-700 bg-red-500">Remove</button>
            </div>
        </div>
    </div>
</div>
</div>
  </section>
  
</main>

   </>
  );
}

export default App;
