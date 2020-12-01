package com.example.project1342

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.activity_main.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit



class MainActivity : AppCompatActivity()
{
    lateinit var list: ArrayList<Data>
    lateinit var adapter: RecyclerViewAdapter
    var notLoading = true

    lateinit var layoutManager: LinearLayoutManager
    lateinit var api: DataApi
    lateinit var retrofit: Retrofit
    override fun onCreate(savedInstanceState: Bundle?)
    {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        list = ArrayList()
        adapter = RecyclerViewAdapter(list)
        layoutManager = LinearLayoutManager(this)
        recyclerview.layoutManager = layoutManager
        recyclerview.adapter=adapter
        retrofit = RetrofitInstance.getRetrofitInstance()
        api = retrofit.create(DataApi::class.java)
        load(0)
        addscrolllistener()
    }
    private fun addscrolllistener()
    {
        recyclerview.addOnScrollListener(object : RecyclerView.OnScrollListener()
        {
            override fun onScrolled(recyclerView: RecyclerView, dx: Int, dy: Int)
            {
                if(notLoading &&  layoutManager.findLastCompletelyVisibleItemPosition() == list.size -1 )
                {
                    list.add(Data("progress"))
                    adapter.notifyItemInserted(list.size -1)
                    notLoading = false
                    val call: Call<List<Data>> = api.getData(list.size - 1)
                    call.enqueue( object :  Callback<List<Data>>
                    {
                        override fun onResponse(call: Call<List<Data>>?, response: Response<List<Data>>?)
                        {
                            list.removeAt(list.size - 1)
                            adapter.notifyItemRemoved(list.size)
                            if(response!!.body().isNotEmpty())
                                {
                                    list.addAll(response.body())
                                    adapter.notifyDataSetChanged()
                                    notLoading = true
                                }
                                else
                                {
                                    Toast.makeText(applicationContext,"End of data reached", Toast.LENGTH_LONG).show()
                                }
                        }
                        override fun onFailure(call: Call<List<Data>>?, t: Throwable?) {
                            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
                        }
                    })
                }
            }
        })
    }
    private fun load(i: Int)
    {
        val call: Call<List<Data>> = api.getData(i)
        call.enqueue(object : Callback<List<Data>>
        {
            override fun onResponse(call: Call<List<Data>>?, response: Response<List<Data>>?)
            {
                if(response!!.isSuccessful)
                {
                    list.addAll(response!!.body())
                    adapter.notifyDataSetChanged()
                }
            }
            override fun onFailure(call: Call<List<Data>>?, t: Throwable?)

            {
                Log.e("loadmore",t.toString())
            }
        })
    }
}