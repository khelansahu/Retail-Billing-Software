package in.khelaninfo.billingsoftware.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.khelaninfo.billingsoftware.dto.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Long> {

	AdminEntity findByEmailAndPassword(String email,String password);

}
