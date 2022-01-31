package com.codeboot.learning;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	private Integer courseid;
	private String name;
	private String description;
	private String fee;
	private String resources;
		
	public Course() {
	}
	
	public Course(Integer courseid, String name, String description, String fee, String resources) {
		this.courseid = courseid;
		this.name = name;
		this.description = description;
		this.fee = fee;
		this.resources = resources;
	}
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getCourseid() {
		return courseid;
	}
	public void setCourseid(Integer courseid) {
		this.courseid = courseid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getFee() {
		return fee;
	}
	public void setFee(String fee) {
		this.fee = fee;
	}
	public String getResources() {
		return resources;
	}
	public void setResources(String resources) {
		this.resources = resources;
	}
	

}
