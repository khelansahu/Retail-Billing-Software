package in.khelaninfo.billingsoftware.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import in.khelaninfo.billingsoftware.dao.CategoryDao;
import in.khelaninfo.billingsoftware.dto.CategoryEntity;
import in.khelaninfo.billingsoftware.exception.CategoryNotFoundException;
import in.khelaninfo.billingsoftware.util.CategoryResponseStructure;
import in.khelaninfo.billingsoftware.util.CategoryResponseStructureList;

@Service
public class CategoryService {

	@Autowired
	private CategoryDao categoryDao;
	
	CategoryResponseStructure<CategoryEntity> structure=new CategoryResponseStructure<CategoryEntity>();
	
	CategoryResponseStructureList<CategoryEntity> structure1=new CategoryResponseStructureList<CategoryEntity>();
	
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> saveCategory(CategoryEntity categoryEntity) {
			structure.setMsg("category added");
			structure.setData(categoryDao.saveCategory(categoryEntity));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<CategoryResponseStructure<CategoryEntity>>(structure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<CategoryResponseStructureList<CategoryEntity>> fetchCategory() {
		List<CategoryEntity> categoriesDb = categoryDao.fetchCategory();
		if (categoriesDb!=null) {
			structure1.setMsg("find all the categoreis");
			structure1.setDataList(categoryDao.fetchCategory());
			structure1.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<CategoryResponseStructureList<CategoryEntity>>(structure1,HttpStatus.OK);
		}else {
			throw new CategoryNotFoundException("categories not found");
		}
	}
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> deleteCategoryBy(String categoryId) {
		CategoryEntity categoryDb = categoryDao.deleteCategoryBy(categoryId);
		if (categoryDb!=null) {
			structure.setMsg("deleted the category");
			structure.setData(categoryDao.deleteCategoryBy(categoryId));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<CategoryResponseStructure<CategoryEntity>>(structure,HttpStatus.ACCEPTED);
		}else {
			 throw new CategoryNotFoundException("category not found");    //i have to write here exception for category not found like that.
		}
	}
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> uploadImage(String categoryId,MultipartFile file) throws IOException {
		CategoryEntity categoryDb = categoryDao.findByCategoyId(categoryId);
		if (categoryDb!=null) {
			categoryDb.setImgUrl(file.getBytes());
			 structure.setData(categoryDao.updateCategory(categoryDb));
			structure.setMsg("Image upload");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<CategoryResponseStructure<CategoryEntity>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new CategoryNotFoundException("category not available");
		}
	}
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> findByCategoryId(String categoryId) {
		CategoryEntity categoryDb = categoryDao.findByCategoyId(categoryId);
		if (categoryDb!=null) {
			structure.setMsg("category find");
			structure.setData(categoryDb);
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<CategoryResponseStructure<CategoryEntity>>(structure,HttpStatus.OK);
		}else {
			throw new CategoryNotFoundException("category not availbel");
		}
		
	}
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> saveCategoryWithImage(
	        CategoryEntity categoryEntity, MultipartFile file) throws IOException {

		if(file!=null && !file.isEmpty()) {
			categoryEntity.setImgUrl(file.getBytes());
		}else {
			categoryEntity.setImgUrl(null);
		}
		
	    CategoryEntity savedEntity = categoryDao.saveCategory(categoryEntity);

	    structure.setMsg("Category saved successfully"+(file!=null && !file.isEmpty()?"with image.":"without image."));
	    structure.setData(savedEntity);
	    structure.setStatusCode(HttpStatus.CREATED.value());

	    return new ResponseEntity<>(structure, HttpStatus.CREATED);
	}

	
	
	
	
}
