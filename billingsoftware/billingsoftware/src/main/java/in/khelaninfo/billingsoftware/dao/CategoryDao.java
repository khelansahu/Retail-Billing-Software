package in.khelaninfo.billingsoftware.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.khelaninfo.billingsoftware.dto.CategoryEntity;
import in.khelaninfo.billingsoftware.exception.CategoryAlreadyExistException;
import in.khelaninfo.billingsoftware.repository.CategoryEntityRepository;

@Repository
public class CategoryDao {

	@Autowired
	private CategoryEntityRepository categoryEntityRepository;
	
	public CategoryEntity saveCategory(CategoryEntity categoryEntity) {
		CategoryEntity existingCategory = categoryEntityRepository.findByName(categoryEntity.getName());
		
		if (existingCategory!=null) {
			throw new CategoryAlreadyExistException("category already exist");
		}else {
			categoryEntity.setCategoryId("CAT" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
			return categoryEntityRepository.save(categoryEntity);
		}
		
	}
	
	public List<CategoryEntity>  fetchCategory() {
		return categoryEntityRepository.findAll();
		
	}
	
	public CategoryEntity deleteCategoryBy(String categoryId) {
		CategoryEntity categoryExist= categoryEntityRepository.findByCategoryId(categoryId);
		if (categoryExist!=null) {
			categoryEntityRepository.delete(categoryExist);
			return categoryExist;
		}else {
			return null;
		}
	}
	public CategoryEntity findByCategoyId(String categoryId) {
		return categoryEntityRepository.findByCategoryId(categoryId);
	}
	public CategoryEntity updateCategory(CategoryEntity categoryEntity) {
	    return categoryEntityRepository.save(categoryEntity);  // No duplicate check
	}

}
