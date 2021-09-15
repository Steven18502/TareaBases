package com.example.tecbankapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class TarjetasActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tarjetas);

        Button btnTarjetas2 = (Button)findViewById(R.id.btnTarjetas2);
        Button btnTarjetas1 = (Button)findViewById(R.id.btnTarjetas1);

        btnTarjetas2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent comprastarjetas = new Intent(TarjetasActivity.this, ComprasTarjetas.class);
                TarjetasActivity.this.startActivity(comprastarjetas);
                finish();
            }
        });

        btnTarjetas1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent pagotarjetas = new Intent(TarjetasActivity.this, PagoTarjetas.class);
                TarjetasActivity.this.startActivity(pagotarjetas);
                finish();
            }
        });

    }
}