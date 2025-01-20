import { Search } from "lucide-react";
import SearchFrom from "../../components/search";
import Sturtup from "@/components/startupfile";
import { START_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";


export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) 

{ 
  const posts= await client.fetch(START_QUERY)
const query=(await searchParams).query
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">
             Vibe
          </h1>
          <p className="sub_heading !max-w-3xl text-white">
              news
            </p>
            <Search/>
            <SearchFrom query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `search resualt for "${query}" `:'AF fact'}
      </p>
      <ul className="mt-7 card_grid">
          {
            posts.length>0?(
              posts.map((post:startupcard)=>(
              <Sturtup key={post?._id} post={post}/>
              ))
            ):(
            <p className="no-results">NOT FOUND</p>
            )
          }
        </ul>
      </section>

    
    </>
  );
}


