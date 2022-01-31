package com.codeboot.learning;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class User {
	
	private Integer userid;
	private String name;
	private String phone;
	private String email;
	private String address;
	private String password;

	public User() {
	}
	
	public User(Integer userid, String name, String phone, String email, String address, String password) {
		this.userid = userid;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.password = password;
	}

	@Id
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
