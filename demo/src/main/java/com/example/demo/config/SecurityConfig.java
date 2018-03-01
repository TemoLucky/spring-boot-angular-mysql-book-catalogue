package com.example.demo.config;

//import org.springframework.boot.autoconfigure.security.SecurityProperties;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter{
//
//    @Override
//    public void configure(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity.authorizeRequests()
//                .antMatchers("/getBooks").hasRole("USER")
//                .and()
//                .formLogin();
//    }
//}

//@Configuration
//@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .httpBasic()
//                .and()
//                .authorizeRequests()
//                .antMatchers("/home/sultan/Desktop/book-catalogue-app/index.html",
//                        "/", "/home", "/login").permitAll()
//                .anyRequest().authenticated();
//    }
//}
