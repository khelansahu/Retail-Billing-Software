package in.khelaninfo.billingsoftware.entity.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.databind.ObjectMapper;

import in.khelaninfo.billingsoftware.dto.CategoryEntity;
import in.khelaninfo.billingsoftware.service.CategoryService;
import in.khelaninfo.billingsoftware.util.CategoryResponseStructure;
import in.khelaninfo.billingsoftware.util.CategoryResponseStructureList;

@RestController
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping("/addcategory")
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> saveCategory(@RequestBody CategoryEntity categoryEntity) {
		return categoryService.saveCategory(categoryEntity);
	}

	@GetMapping("/fetchgategory")
	public ResponseEntity<CategoryResponseStructureList<CategoryEntity>> fetchCategory() {
//		System.out.println("Hit fetchCategory endpoint");
		return categoryService.fetchCategory();
	}

	@DeleteMapping("/{categoryId}")
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> fetchCategory(@PathVariable String categoryId) {
		return categoryService.deleteCategoryBy(categoryId);
	}
	@PutMapping("/uploadimage/{categoryId}")
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> uploadImage(@PathVariable String categoryId, @RequestPart("file") MultipartFile file) throws IOException {
		return categoryService.uploadImage(categoryId, file);
	}
	@GetMapping("/findcategory/{categoryId}")
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>>  findCategoryById(@PathVariable String categoryId) {
		return categoryService.findByCategoryId(categoryId);
	}

	@PostMapping("/addcategorywithimage")
	public ResponseEntity<CategoryResponseStructure<CategoryEntity>> addCategoryWithImage(
	    @RequestPart("categoryEntity") String categoryJson,
	    @RequestPart(value="file",required = false) MultipartFile file) throws IOException {

	    // Convert JSON string to CategoryEntity manually
	    ObjectMapper mapper = new ObjectMapper();
	    CategoryEntity category = mapper.readValue(categoryJson, CategoryEntity.class);

	    return categoryService.saveCategoryWithImage(category, file);
	}

	
	
}
