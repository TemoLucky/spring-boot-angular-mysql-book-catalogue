package com.example.demo;

import com.example.demo.model.Book;
import com.example.demo.model.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SampleController {
    private final UserRepository userRepository;
    private final BookRepository bookRepository;
    private final HttpSession httpSession;

    @Autowired
    public SampleController(BookRepository bookRepository, HttpSession httpSession, UserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.httpSession = httpSession;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<List<Book>> login(@Valid @RequestBody User user){

        System.out.println(httpSession.getId());
        User currentUser =  userRepository.findByUserName(user.getUserName());
        if (currentUser != null && currentUser.getPassword().equals(user.getPassword())){
            this.httpSession.setAttribute("user", currentUser);
            List<Book> books = currentUser.getBooks();
            return ResponseEntity.ok().body(books);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/getBooks")
    public List<Book> getBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/getFavourites")
    public List<Book> getFavourites(){
        User currentUser = (User) httpSession.getAttribute("user");
        System.out.println(httpSession.getId());
//        String userName = (String) httpSession.getAttribute("userName");
//        User currentUser = userRepository.findByUserName(userName);
        return currentUser.getBooks();
    }

    @PostMapping("/deleteFavouriteBook")
    public String deleteFavourite(@RequestBody String id){
        User currentUser =(User) httpSession.getAttribute("user");
        int ID = Integer.parseInt(id);
        currentUser.getBooks().remove(ID);
        userRepository.save(currentUser);
        return "Book with id: " + id + " will be deleted";
    }

    @PostMapping("/addBookToFavourite")
    public String addBookToFavourite(@RequestBody Book book){
        User currentUser = (User) httpSession.getAttribute("user");
        currentUser.getBooks().add(book);
        userRepository.save(currentUser);
        return "Success Book Was Deleted";
    }
}
