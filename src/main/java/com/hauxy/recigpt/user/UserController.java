package com.hauxy.recigpt.user;

import com.hauxy.recigpt.user.dto.CreateUserRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class UserController {
    public record UserResponse(String username) { }
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public UserResponse getUser(Authentication authentication) {
        String username = authentication.getName();
        return new UserResponse(username);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request) {
        User newUser = userService.createNewUser(request.username(), request.password());
        return ResponseEntity.ok(newUser);
    }
}
