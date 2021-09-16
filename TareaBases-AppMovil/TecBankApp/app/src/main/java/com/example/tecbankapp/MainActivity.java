package com.example.tecbankapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btnLogin = (Button)findViewById(R.id.btnLogin);

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent menu = new Intent(MainActivity.this, MainActivity2.class);
                MainActivity.this.startActivity(menu);
                finish();
            }
        });
    }

    /*
    public void openMenu(View view){
        Intent menu = new Intent(MainActivity.this, MainActivity2.class);
        MainActivity.this.startActivity(menu);
        finish();
    }

     */
}