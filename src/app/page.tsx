import React from "react"
// import Footer from "@/components/Footer/footer"
import Navbar from "@/components/Navbar/Navbar"
import Searchbar from "@/components/SearchBar/Search"
import SearchButton from "@/components/Button/SearchButton";
import "tailwindcss/tailwind.css"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/client';
export default function Home() {
  return (
    <main className="bg-cover bg-center min-h-screen custom_bg">
      {/* <Navbar /> */}
      <Navbar/>
      <div className="flex flex-col justify-center items-center" style={{ height: '75vh' }}>
        <div>
          <h2 className="text-yellow-200 font-sans text-6xl font-bold text-center my-10">
            MOQO
          </h2>
          <p className="text-white text-2xl font-bold text-center mb-2 mt-10">
            Unleash Your Movie Obsession: Find Your Perfect Flick
          </p>
          <div className="flex justify-center border-2 rounded-full bg-gradient">
            <Searchbar />
          </div>
          <div className="flex justify-center mt-16 ">
            <div className="border-2  rounded-full bg-gradient border-search-btn w-1/3">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
