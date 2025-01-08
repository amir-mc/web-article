import { Search } from "lucide-react";
import SearchFrom from "../components/search";


export default function Home() {
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
            <SearchFrom/>
    </section>

    
    </>
  );
}


