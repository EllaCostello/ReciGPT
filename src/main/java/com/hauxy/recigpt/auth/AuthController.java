package com.hauxy.recigpt.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {
    @GetMapping("/auth")
    public String viewAuthPage() {
        return "auth";
    }
}
