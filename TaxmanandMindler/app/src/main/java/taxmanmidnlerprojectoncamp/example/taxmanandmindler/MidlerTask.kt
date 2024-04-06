package taxmanmidnlerprojectoncamp.example.taxmanandmindler

import android.os.AsyncTask
import android.util.Log
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import okhttp3.FormBody
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.IOException


class MidlerTask(private val callback: (String?) -> Unit) : AsyncTask<String, Void, String?>() {

    override fun doInBackground(vararg params: String): String? {
        val baseUrl = "https://taxmann-mindler-api.vercel.app"
        val endpoint = "questions"
        val topic = params[0]
        val difficult = params[1]

        val requestBody = FormBody.Builder()
            .add("topic", topic)
            .add("difficult", difficult)
            .build()


        val client = OkHttpClient()

        val request = Request.Builder()
            .url("$baseUrl/$endpoint")
            .post(requestBody)
            .build()

        try {
            // Execute the request and get the response
            val response = client.newCall(request).execute()

            // Check if the response is successful
            if (response.isSuccessful) {
                // Parse the JSON response
                val jsonResponse = response.body?.string()
                return jsonResponse

            } else {
                Log.e("ApiTask", "Request failed with code: ${response.code}")
            }
        } catch (e: IOException) {
            Log.e("ApiTask", "Exception during API request: ${e.message}")
        }

        return null
    }


    override fun onPostExecute(result: String?) {
        // Callback to handle the result
        callback(result)
    }

}