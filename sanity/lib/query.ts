import { defineQuery } from "next-sanity";

export const START_QUERY= defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_creatAt desc){
 _id,
   slug,
<<<<<<< HEAD
   title, 
=======
   title,
>>>>>>> 4d9191c0b33e5b04d302a2f2db2abb10de170d27
   view,
   image,
   author->{_id,name,bio,image},
   category,
   description,
<<<<<<< HEAD
   _createdAt,
   pitch
  
}
`)
=======
_createdAt,
   pitch
}
`)
>>>>>>> 4d9191c0b33e5b04d302a2f2db2abb10de170d27
