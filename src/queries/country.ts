import { db } from "@/lib/db";

export const getCountries = async () => {
  
     // Retrieve all countries
        const countries = await db.country.findMany({
          orderBy: {
            name: "asc",
          },
        });
        console.log("Countries fetched: ", countries.length);
        return countries;
     
   }