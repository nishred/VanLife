import React from "react"

import {useSearchParams} from "react-router-dom"


export function useTypeFilter()
{

   const [searchParams,setSearchParams] = useSearchParams()

   return searchParams.get("type") 

}
