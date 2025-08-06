package in.khelaninfo.billingsoftware.entity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.khelaninfo.billingsoftware.dto.AdminEntity;
import in.khelaninfo.billingsoftware.service.AdminService;
import in.khelaninfo.billingsoftware.util.ResponseStructure;

@RestController
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/login")
	public ResponseEntity<ResponseStructure<AdminEntity>> Login(@RequestBody AdminEntity adminEntity) {
		return adminService.Login(adminEntity);
	}
	
	@PostMapping("/saveadmin")
	public AdminEntity saveAdmin(@RequestBody AdminEntity adminEntity) {
		return adminService.saveAdmin(adminEntity);
	}
}
