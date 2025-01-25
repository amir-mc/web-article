
import { defineField } from "sanity";

export const startup=defineField({
    name:'startup',
    title:'post news',
    type:'document',
    fields:[
        defineField({
            name:'title',
            type:'string'
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{
                source:'title'//this is a new post -> this-is-new-post
 
            }
        }),
        defineField({
            name:'author',
            type:'reference',
            to:{type:'author'}

        }),
        defineField({
            name:'view',
            type:'number'
        }),
        defineField({
            name:'description',
            type:'text'
        }),
        defineField({
            name:'category',
            type:'string',
            validation:(Rule)=>Rule.min(1).max(30).required().error('PLASE INTER CATEGORY')
        }),
      
        defineField({
            name:'image',
            type:'url'
        }), 
        defineField({
            name:'pitch',
            type:'text'
        })

    ]
})