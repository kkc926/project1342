package com.example.project1342

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetrofitInstance
{
    companion object
    {
        fun getRetrofitInstance(): Retrofit
        {
            val retrofit = Retrofit.Builder().baseUrl("https://www.androidride.com/").addConverterFactory(
                    GsonConverterFactory.create()).build()
            return retrofit
        }
    }
}