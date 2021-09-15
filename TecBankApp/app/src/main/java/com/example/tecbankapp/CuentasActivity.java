package com.example.tecbankapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class CuentasActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cuentas);

        Button btnCuentas1 = (Button)findViewById(R.id.btnCuentas1);
        Button btnCuentas2 = (Button)findViewById(R.id.btnCuentas2);

        btnCuentas1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent movcuentas = new Intent(CuentasActivity.this,  MovCuentas.class);
                CuentasActivity.this.startActivity(movcuentas);
            }
        });

        btnCuentas2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent transfercuentas = new Intent(CuentasActivity.this,  TranferCuentas.class);
                CuentasActivity.this.startActivity(transfercuentas);
            }
        });

    }
}