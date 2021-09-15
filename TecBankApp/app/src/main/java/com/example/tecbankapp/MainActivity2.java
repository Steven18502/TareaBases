package com.example.tecbankapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Button btnCuentas = (Button)findViewById(R.id.btnCuentas);
        Button btnTarjetas = (Button)findViewById(R.id.btnTarjetas);
        Button btnPrestamos = (Button)findViewById(R.id.btnPrestamos);

        btnCuentas.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent cuentas = new Intent(MainActivity2.this, CuentasActivity.class);
                MainActivity2.this.startActivity(cuentas);
            }
        });

        btnTarjetas.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent tarjetas = new Intent(MainActivity2.this, TarjetasActivity.class);
                MainActivity2.this.startActivity(tarjetas);
            }
        });

        btnPrestamos.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent prestamos = new Intent(MainActivity2.this, PrestamosActivity.class);
                MainActivity2.this.startActivity(prestamos);
            }
        });

    }
/*
    public void openCuentas(View view){
        Intent cuentas = new Intent(MainActivity2.this, CuentasActivity.class);
        MainActivity2.this.startActivity(cuentas);
    }

    public void openTarjetas(View view){
        Intent tarjetas = new Intent(MainActivity2.this, TarjetasActivity.class);
        MainActivity2.this.startActivity(tarjetas);
    }

    public void openPrestamos(View view){
        Intent prestamos = new Intent(MainActivity2.this, PrestamosActivity.class);
        MainActivity2.this.startActivity(prestamos);
    }

 */
}