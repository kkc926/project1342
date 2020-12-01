package com.example.project1342

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query

interface DataApi {
@GET(value = "data.php")
    fun getData(@Query(value = "index")index:Int) : Call<List<Data>>
}