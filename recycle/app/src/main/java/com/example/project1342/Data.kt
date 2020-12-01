package com.example.project1342

data class Data(var category: String)
{
    var title: String? = null
    var subtitle: String? = null
    init {
        this.category = category
    }
}