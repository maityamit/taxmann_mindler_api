package taxmanmidnlerprojectoncamp.example.taxmanandmindler

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var userName:EditText
    lateinit var submitButton:Button
    lateinit var radio_group:RadioGroup
    lateinit var react:CheckBox
    lateinit var nodejs:CheckBox

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        userName = findViewById(R.id.userName)
        submitButton = findViewById(R.id.play_quiz_button)
        radio_group = findViewById(R.id.radio_group)
        react = findViewById(R.id.checkBox)
        nodejs = findViewById(R.id.checkBox2)

        radio_group.setOnCheckedChangeListener(
            RadioGroup.OnCheckedChangeListener { group, checkedId ->
                val radio: RadioButton = findViewById(checkedId)

            })

        submitButton.setOnClickListener {

            var userNameString:String = userName.text.toString()
            var difficultyLevel:String = ""
            var topicLevel:String = ""

            if(react.isChecked && nodejs.isChecked){
                topicLevel += "react;nodejs"
            }else if(react.isChecked ){
                topicLevel += "react"
            }else if(nodejs.isChecked){
                topicLevel += "nodejs"
            }


            val id: Int = radio_group.checkedRadioButtonId
            if (id!=-1){
                val radio:RadioButton = findViewById(id)

                if(radio.text.toString().equals("Beginner")){
                    difficultyLevel = "easy"
                }else if(radio.text.toString().equals("Intermediate")){
                    difficultyLevel = "medium"
                }else if(radio.text.toString().equals("Advanced")){
                    difficultyLevel = "hard"
                }

            }else{
                Toast.makeText(applicationContext,"On button click :" +
                        " nothing selected",
                    Toast.LENGTH_SHORT).show()
            }

            val intent:Intent = Intent(this,QuizDashboardActivity::class.java)
            intent.putExtra("name",userNameString)
            intent.putExtra("topic",topicLevel)
            intent.putExtra("difficulty",difficultyLevel)
            startActivity(intent)
        }



    }
}