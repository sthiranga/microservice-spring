package com.sasika.auth.entity;

public enum Role {

	STUDENT("Student");

	private final String name;

	Role(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}
