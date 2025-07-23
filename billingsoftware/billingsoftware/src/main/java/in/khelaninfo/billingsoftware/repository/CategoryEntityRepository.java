package in.khelaninfo.billingsoftware.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.khelaninfo.billingsoftware.dto.CategoryEntity;

public interface CategoryEntityRepository extends JpaRepository<CategoryEntity, Long>{

	CategoryEntity findByCategoryId(String categoryId);
	CategoryEntity findByName(String name);
}
