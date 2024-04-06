package taxmanmidnlerprojectoncamp.example.taxmanandmindler

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class QuizDashboardActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_quiz_dashboard)


        val extras = intent.extras
        val userName: String? = extras?.getString("name")
        val topic: String? = extras?.getString("topic")
        val difficulty:String? = extras?.getString("difficulty")

        Toast.makeText(this,userName+topic+difficulty,Toast.LENGTH_SHORT).show()


        val apiTask = MidlerTask { isValid ->

            Toast.makeText(this,isValid.toString(),Toast.LENGTH_SHORT).show()

        }
        apiTask.execute(topic,difficulty)


    }
}