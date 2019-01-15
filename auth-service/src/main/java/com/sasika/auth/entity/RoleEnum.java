package com.sasika.auth.entity;

public enum RoleEnum {
	ROLE_ADMIN("ADMIN"),
	ROLE_STUDENT("STUDENT");
	
	private String role;
	 
	RoleEnum(String role) {
        this.role = role;
    }
 
    public String getRole() {
        return role;
    }
}
