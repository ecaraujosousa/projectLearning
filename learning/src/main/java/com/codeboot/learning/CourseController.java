package com.codeboot.learning;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class CourseController {

	@Autowired
	private CourseService service;
	
	@GetMapping("/course")
	public List<Course> list() {
		return service.listAll();
	}
	
	@GetMapping("/course/{id}")
	public ResponseEntity<Course> get(@PathVariable Integer id) {
		try {
			Course course = service.get(id);
			return new ResponseEntity<Course>(course, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Course>(HttpStatus.NOT_FOUND);
		}

	}
	
	@PostMapping("/course")
	public void add(@RequestBody Course course) {
		service.save(course);
	}
	
	@PutMapping("/course/{id}")
	public ResponseEntity<?> update(@RequestBody Course course, @PathVariable Integer id) {
		try {
			Course existCourse = service.get(id);
			service.save(course);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/course/{id}")
	public void delete(@PathVariable Integer id) {
		service.delete(id);
	}
	
	
}