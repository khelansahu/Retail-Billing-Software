package in.khelaninfo.billingsoftware.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.khelaninfo.billingsoftware.dao.AdminDao;
import in.khelaninfo.billingsoftware.dto.AdminEntity;
import in.khelaninfo.billingsoftware.util.ResponseStructure;

@Service
public class AdminService {

	@Autowired
	private AdminDao adminDao;
	
	ResponseStructure<AdminEntity> structure=new ResponseStructure<AdminEntity>();
	
	public ResponseEntity<ResponseStructure<AdminEntity>> Login(AdminEntity adminEntity) {
		AdminEntity admin = adminDao.Login(adminEntity.getEmail(),adminEntity.getPassword());
		
		if (admin!=null) {
			structure.setMsg("Login sucessfully");
			structure.setData(admin);
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<AdminEntity>>(structure,HttpStatus.ACCEPTED);
		}
		else {
			return null;
		}
		
	}
	
	public AdminEntity saveAdmin(AdminEntity adminEntity) {
		return adminDao.saveAdmin(adminEntity);
	}
}
