package in.khelaninfo.billingsoftware.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.khelaninfo.billingsoftware.dto.AdminEntity;
import in.khelaninfo.billingsoftware.repository.AdminRepository;

@Repository
public class AdminDao {

	@Autowired
	private AdminRepository adminRepository;
	
	public AdminEntity Login(String email, String password) {
		 return adminRepository.findByEmailAndPassword(email,password);
	}
	public AdminEntity saveAdmin(AdminEntity adminEntity) {
		return adminRepository.save(adminEntity);
	}
	
}
