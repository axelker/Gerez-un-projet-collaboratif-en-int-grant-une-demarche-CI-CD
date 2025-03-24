package com.openclassrooms.bobapp.service;

import org.springframework.stereotype.Service;

@Service
public class TestService {

    public int getTestMethod(int a,int b) {
        var test = a *b;

        if (test > 3 ) {
            return a + b;
        }

        return b;
    }
    
}
