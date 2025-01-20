import { defineQuery } from "next-sanity";

export const START_QUERY= defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_creatAt desc){
 _id,
   slug,
   title,
   view,
   image,
   author->{_id,name,bio,image},
   category,
   description,
   _creatAt
  
}
`)
